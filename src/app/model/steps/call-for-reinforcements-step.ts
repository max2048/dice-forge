import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {HeroicFeat} from "../heroic-feat";
import {HeroicFeatEffectType} from "../heroic-feat-effect-type";
import {DoneStep} from "./done-step";

export class CallForReinforcementsStep extends Step {

    TYPE = StepType.CALL_FOR_REINFORCEMENTS;

    currentHeroicFeat: HeroicFeat;
    alreadyApplied: HeroicFeat[] = [];

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    applyReinforcementEffect = (heroicFeat: HeroicFeat): void => {
        if (heroicFeat.effectType !== HeroicFeatEffectType.REINFORCEMENT) {
            throw new Error("Heroic feat [" + heroicFeat.name + "] has no reinforcement effect.");
        }
        if (this.isAlreadyApplied(heroicFeat)) {
            throw new Error("Heroic feat [" + heroicFeat.name + "]'s reinforcement effect has already been applied.");
        }
        this.currentHeroicFeat = heroicFeat;
        // this.currentHeroicFeat.initEffect(this.game, this.heroicFeatReinforcementEffectApplied);
        this.currentHeroicFeat.step = new DoneStep();
        this.heroicFeatReinforcementEffectApplied();
    };

    private heroicFeatReinforcementEffectApplied = (): void => {
        console.log(this.game.getActiveHero().name + " has applied the Heroic feat [" + this.currentHeroicFeat.name + "] reinforcement effect.");
        this.alreadyApplied.push(this.currentHeroicFeat);
        this.currentHeroicFeat = null;
    };

    public isAlreadyApplied = (heroicFeat: HeroicFeat): boolean => {
        return (this.alreadyApplied.indexOf(heroicFeat) >= 0);
    };

    finish = (): void => {
        console.log(this.game.getActiveHero().name + " is done calling for reinforcements.");
        this.isDone = true;
        this.callbackFunction();
    };
}