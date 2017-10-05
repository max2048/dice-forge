import {Step} from "./step";
import {StepType} from "./step-type";
import {Hero} from "../hero";
import {ApplyDieFaceEffectsStep} from "./apply-die-face-effects-step";
import {RollHeroBothDiceStep} from "./roll-hero-both-dice-step";

export class ReceiveDivineBlessingStep extends Step {

    TYPE = StepType.RECEIVE_DIVINE_BLESSING;

    rollHeroBothDiceStep: RollHeroBothDiceStep;
    applyLightDieFaceEffectsStep: ApplyDieFaceEffectsStep;
    applyDarkDieFaceEffectsStep: ApplyDieFaceEffectsStep;

    constructor(readonly hero: Hero,
                private readonly callbackFunction: () => void) {
        super();
        this.rollHeroBothDiceStep = new RollHeroBothDiceStep(hero, this.rollHeroBothDiceStepEnded);
    }

    public rollHeroBothDiceStepEnded = (): void => {
        console.log(this.hero.name + " has rolled both his/her dice.");
        this.applyLightDieFaceEffectsStep = new ApplyDieFaceEffectsStep(this.hero.inventory.lightDie.lastRolledFace, this.hero, this.applyLightDieFaceEffectsStepEnded);
        this.applyDarkDieFaceEffectsStep = new ApplyDieFaceEffectsStep(this.hero.inventory.darkDie.lastRolledFace, this.hero, this.applyDarkDieFaceEffectsStepEnded);
    };

    private applyLightDieFaceEffectsStepEnded = (): void => {
        console.log(this.hero.name + " has applied the effects from the light die.");
        this.checkHeroHasAppliedBothDiceEffects();
    };

    private applyDarkDieFaceEffectsStepEnded = (): void => {
        console.log(this.hero.name + " has applied the effects from the dark die.");
        this.checkHeroHasAppliedBothDiceEffects();
    };

    private checkHeroHasAppliedBothDiceEffects = (): void => {
        if (this.applyLightDieFaceEffectsStep.isDone && this.applyDarkDieFaceEffectsStep.isDone) {
            this.isDone = true;
            this.callbackFunction();
        }
    };
}