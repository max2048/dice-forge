import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {Hero} from "../hero";
import {RollAllHeroesDiceStep} from "./roll-all-heroes-dice-step";
import {ApplyDieFaceEffectsStep} from "./apply-die-face-effects-step";

// All heroes roll their dice.
// Then each hero successively applies the effect of his/her dice.
export class ReceiveDivineBlessingsStep extends Step {

    TYPE = StepType.RECEIVE_DIVINE_BLESSINGS;

    rollAllHeroesDiceStep: RollAllHeroesDiceStep;
    currentHeroIndex: number;
    applyLightDieFaceEffectsStep: ApplyDieFaceEffectsStep;
    applyDarkDieFaceEffectsStep: ApplyDieFaceEffectsStep;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
        this.rollAllHeroesDiceStep = new RollAllHeroesDiceStep(game, this.rollAllHeroesDiceStepEnded);
    }

    private rollAllHeroesDiceStepEnded = (): void => {
        // Now that all heroes have rolled their dice, they may receive their divine blessings (starting with the *active* hero).
        this.currentHeroIndex = this.game.activeHeroIndex;
        this.currentHeroAppliesDiceEffects();
    };

    private currentHeroAppliesDiceEffects = (): void => {
        let currentHero = this.getCurrentHero();
        this.applyLightDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.lightDie.lastRolledFace, currentHero, this.applyLightDieFaceEffectsStepEnded);
        this.applyDarkDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.darkDie.lastRolledFace, currentHero, this.applyDarkDieFaceEffectsStepEnded);
    };

    private applyLightDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentHero().name + " has applied the effects from the light die.");
        this.checkCurrentHeroHasAppliedBothDiceEffects();
    };

    private applyDarkDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentHero().name + " has applied the effects from the dark die.");
        this.checkCurrentHeroHasAppliedBothDiceEffects();
    };

    private checkCurrentHeroHasAppliedBothDiceEffects = (): void => {
        if (this.applyLightDieFaceEffectsStep.isDone && this.applyDarkDieFaceEffectsStep.isDone) {
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