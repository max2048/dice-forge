import {Step} from "../step";
import {ApplyDieFaceEffectsStep} from "../apply-die-face-effects-step";
import {DoneStep} from "../done-step";
import {Game} from "../../game";
import {Hero} from "../../hero";
import {DieFaceType} from "../../die-face-type";
import {RollHeroesBothDiceStep} from "../roll-heroes-dice-step";

export class Hf04Step extends Step {

    rollInactiveHeroesDiceStep: RollHeroesBothDiceStep;
    currentInactiveHeroIndex: number;
    applyLightDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;
    applyDarkDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
        // Inactive heroes roll their dice
        this.rollInactiveHeroesDiceStep = new RollHeroesBothDiceStep(game.getInactiveHeroes(), game, this.rollInactiveHeroesDiceStepEnded);
    }

    private rollInactiveHeroesDiceStepEnded = (): void => {
        // Now that inactive heroes have rolled their dice, they lose resources.
        this.currentInactiveHeroIndex = 0;
        this.currentInactiveHeroAppliesDiceEffects();
    };

    private currentInactiveHeroAppliesDiceEffects = (): void => {
        let currentHero = this.getCurrentInactiveHero();
        if (currentHero.inventory.lightDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            currentHero.inventory.addGoldNuggets(-1 * currentHero.inventory.lightDie.lastRolledFace.goldNuggetsQuantity);
            currentHero.inventory.addSunShards(-1 * currentHero.inventory.lightDie.lastRolledFace.sunShardsQuantity);
            currentHero.inventory.addMoonShards(-1 * currentHero.inventory.lightDie.lastRolledFace.moonShardsQuantity);
            currentHero.inventory.addGloryPoints(-1 * currentHero.inventory.lightDie.lastRolledFace.gloryPointsQuantity);
            this.applyLightDieFaceEffectsStep = new DoneStep();
            this.applyLightDieFaceEffectsStepEnded();
        } else {
            this.applyLightDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.lightDie.lastRolledFace, -1, currentHero, this.applyLightDieFaceEffectsStepEnded);
        }
        if (currentHero.inventory.darkDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            currentHero.inventory.addGoldNuggets(-1 * currentHero.inventory.darkDie.lastRolledFace.goldNuggetsQuantity);
            currentHero.inventory.addSunShards(-1 * currentHero.inventory.darkDie.lastRolledFace.sunShardsQuantity);
            currentHero.inventory.addMoonShards(-1 * currentHero.inventory.darkDie.lastRolledFace.moonShardsQuantity);
            currentHero.inventory.addGloryPoints(-1 * currentHero.inventory.darkDie.lastRolledFace.gloryPointsQuantity);
            this.applyDarkDieFaceEffectsStep = new DoneStep();
            this.applyDarkDieFaceEffectsStepEnded();
        } else {
            this.applyDarkDieFaceEffectsStep = new ApplyDieFaceEffectsStep(currentHero.inventory.darkDie.lastRolledFace, -1, currentHero, this.applyDarkDieFaceEffectsStepEnded);
        }
    };

    private applyLightDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentInactiveHero().name + " has applied the effects of the light die.");
        this.checkCurrentInactiveHeroHasAppliedBothDiceEffects();
    };

    private applyDarkDieFaceEffectsStepEnded = (): void => {
        console.log(this.getCurrentInactiveHero().name + " has applied the effects of the dark die.");
        this.checkCurrentInactiveHeroHasAppliedBothDiceEffects();
    };

    private checkCurrentInactiveHeroHasAppliedBothDiceEffects = (): void => {
        if (this.applyLightDieFaceEffectsStep && this.applyLightDieFaceEffectsStep.isDone && this.applyDarkDieFaceEffectsStep && this.applyDarkDieFaceEffectsStep.isDone) {
            this.applyLightDieFaceEffectsStep = null;
            this.applyDarkDieFaceEffectsStep = null;
            this.nextInactiveHero();

            // If we're back to the first inactive hero, then we're done with the step
            if (this.currentInactiveHeroIndex === 0) {
                this.isDone = true;
                this.callbackFunction();
            } else {
                this.currentInactiveHeroAppliesDiceEffects();
            }
        }
    };

    public getCurrentInactiveHero = (): Hero => {
        return this.game.getInactiveHeroes()[this.currentInactiveHeroIndex];
    };

    private nextInactiveHero = (): void => {
        this.currentInactiveHeroIndex = (this.currentInactiveHeroIndex + 1) % this.game.getInactiveHeroes().length;
    };
}