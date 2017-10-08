import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {HeroicFeat} from "../heroic-feat";
import {Portal} from "../portal";
import {ReceiveDivineBlessingStep} from "./receive-divine-blessing-step";
import {HeroicFeatEffectType} from "../heroic-feat-effect-type";

export class PerformHeroicFeatStep extends Step {

    TYPE = StepType.PERFORM_HEROIC_FEAT;

    selectedHeroicFeat: HeroicFeat;
    oustedHeroDivineBlessingStep: ReceiveDivineBlessingStep;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    public buyHeroicFeat = (heroicFeat: HeroicFeat): void => {
        if (this.isDone) {
            throw new Error("The heroic feat has already been performed.");
        }
        if (!heroicFeat) {
            throw new Error("Hero needs to select an heroic feat to perform.");
        }
        if (this.game.getActiveHero().inventory.sunShards < heroicFeat.sunShardsCost || this.game.getActiveHero().inventory.moonShards < heroicFeat.moonShardsCost) {
            throw new Error("Hero can't afford the selected heroic feat.");
        }

        this.selectedHeroicFeat = heroicFeat;

        // Hero spends the resources
        this.game.getActiveHero().inventory.addSunShards(-1 * this.selectedHeroicFeat.sunShardsCost);
        this.game.getActiveHero().inventory.addMoonShards(-1 * this.selectedHeroicFeat.moonShardsCost);

        // Is there a hero to oust ?
        let portal: Portal = this.game.islands.findPortalContainingHeroicFeat(this.selectedHeroicFeat);
        if (!portal) {
            throw new Error("Cannot find a portal containing the selected heroic feat.");
        }
        if (portal.hero != null && portal.hero !== this.game.getActiveHero()) {
            console.log(portal.hero.name + " is ousted and receives a divine blessing.");
            this.oustedHeroDivineBlessingStep = new ReceiveDivineBlessingStep(portal.hero, this.oustedHeroDivineBlessingStepEnded);
            this.game.islands.removeHeroFromAnyPortal(this.game.getActiveHero());
            portal.hero = this.game.getActiveHero();
        } else {
            this.game.islands.removeHeroFromAnyPortal(this.game.getActiveHero());
            portal.hero = this.game.getActiveHero();
            this.applyHeroicFeatInstantEffect();
        }
    };

    private oustedHeroDivineBlessingStepEnded = (): void => {
        this.applyHeroicFeatInstantEffect();
    };

    private applyHeroicFeatInstantEffect = (): void => {
        if (this.selectedHeroicFeat.effectType == HeroicFeatEffectType.INSTANT) {
            this.selectedHeroicFeat.initEffect(this.game, this.heroicFeatInstantEffectApplied);
        } else {
            this.takeCardAndEndStep();
        }
    };

    private heroicFeatInstantEffectApplied = (): void => {
        console.log(this.game.getActiveHero().name + " has applied the Heroic feat instant effect.");
        this.selectedHeroicFeat.step = null;
        this.takeCardAndEndStep();
    };

    private takeCardAndEndStep = (): void => {
        this.game.islands.removeHeroicFeatFromPortal(this.selectedHeroicFeat);
        this.game.getActiveHero().inventory.addHeroicFeat(this.selectedHeroicFeat);
        console.log(this.game.getActiveHero().name + " has performed a heroic feat.");
        console.log(this.game.getActiveHero().name + " now has these Heroic feats : " + this.game.getActiveHero().inventory.listHeroicFeatsAsString());
        this.isDone = true;
        this.callbackFunction();
    };
}