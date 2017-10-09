import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {Hero} from "../hero";
import {ApplyDieFaceEffectsStep} from "./apply-die-face-effects-step";
import {DieFaceType} from "../die-face-type";
import {DoneStep} from "./done-step";
import {RollHeroesBothDiceStep} from "./roll-heroes-dice-step";

// All heroes roll their dice.
// Then each hero successively applies the effect of his/her dice.
export class ReceiveDivineBlessingsStep extends Step {

    TYPE = StepType.RECEIVE_DIVINE_BLESSINGS;

    rollAllHeroesDiceStep: RollHeroesBothDiceStep;
    currentHeroIndex: number;
    applyLightDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;
    applyDarkDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
        // All heroes roll their dice
        this.rollAllHeroesDiceStep = new RollHeroesBothDiceStep(game.heroes, game, this.rollAllHeroesDiceStepEnded);
    }

    private rollAllHeroesDiceStepEnded = (): void => {
        // Now that all heroes have rolled their dice, they may receive their divine blessings (starting with the *active* hero).
        this.currentHeroIndex = this.game.activeHeroIndex;
        this.currentHeroAppliesDiceEffects();
    };

    private currentHeroAppliesDiceEffects = (): void => {
        let currentHero = this.getCurrentHero();
        if (currentHero.inventory.lightDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            currentHero.inventory.addGoldNuggets(currentHero.inventory.lightDie.lastRolledFace.goldNuggetsQuantity);
            currentHero.inventory.addSunShards(currentHero.inventory.lightDie.lastRolledFace.sunShardsQuantity);
            currentHero.inventory.addMoonShards(currentHero.inventory.lightDie.lastRolledFace.moonShardsQuantity);
            currentHero.inventory.addGloryPoints(currentHero.inventory.lightDie.lastRolledFace.gloryPointsQuantity);
            this.applyLightDieFaceEffectsStep = new DoneStep();
            this.applyLightDieFaceEffectsStepEnded();
        } else {
            this.applyLightDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.lightDie.lastRolledFace, 1, currentHero, this.applyLightDieFaceEffectsStepEnded);
        }
        if (currentHero.inventory.darkDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            currentHero.inventory.addGoldNuggets(currentHero.inventory.darkDie.lastRolledFace.goldNuggetsQuantity);
            currentHero.inventory.addSunShards(currentHero.inventory.darkDie.lastRolledFace.sunShardsQuantity);
            currentHero.inventory.addMoonShards(currentHero.inventory.darkDie.lastRolledFace.moonShardsQuantity);
            currentHero.inventory.addGloryPoints(currentHero.inventory.darkDie.lastRolledFace.gloryPointsQuantity);
            this.applyDarkDieFaceEffectsStep = new DoneStep();
            this.applyDarkDieFaceEffectsStepEnded();
        } else {
            this.applyDarkDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.darkDie.lastRolledFace, 1, currentHero, this.applyDarkDieFaceEffectsStepEnded);
        }
    };

    private applyLightDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentHero().name + " has applied the effects of the light die.");
        this.checkCurrentHeroHasAppliedBothDiceEffects();
    };

    private applyDarkDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentHero().name + " has applied the effects of the dark die.");
        this.checkCurrentHeroHasAppliedBothDiceEffects();
    };

    private checkCurrentHeroHasAppliedBothDiceEffects = (): void => {
        if (this.applyLightDieFaceEffectsStep && this.applyLightDieFaceEffectsStep.isDone && this.applyDarkDieFaceEffectsStep && this.applyDarkDieFaceEffectsStep.isDone) {
            this.applyLightDieFaceEffectsStep = null;
            this.applyDarkDieFaceEffectsStep = null;
            this.nextHero();

            // If we're back to the active hero, then we're done with the divine blessings
            if (this.currentHeroIndex == this.game.activeHeroIndex) {
                this.isDone = true;
                this.callbackFunction();
            } else {
                this.currentHeroAppliesDiceEffects();
            }
        }
    };

    public getCurrentHero = (): Hero => {
        return this.game.heroes[this.currentHeroIndex];
    };

    private nextHero = (): void => {
        this.currentHeroIndex = (this.currentHeroIndex + 1) % this.game.heroes.length;
    };
}