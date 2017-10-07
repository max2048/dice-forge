import {Step} from "./step";
import {StepType} from "./step-type";
import {Hero} from "../hero";
import {ApplyDieFaceEffectsStep} from "./apply-die-face-effects-step";
import {RollHeroBothDiceStep} from "./roll-hero-both-dice-step";
import {DieFaceType} from "../die-face-type";
import {DoneStep} from "./done-step";

export class ReceiveDivineBlessingStep extends Step {

    TYPE = StepType.RECEIVE_DIVINE_BLESSING;

    rollHeroBothDiceStep: RollHeroBothDiceStep;
    applyLightDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;
    applyDarkDieFaceEffectsStep: ApplyDieFaceEffectsStep | DoneStep;

    constructor(readonly hero: Hero,
                private readonly callbackFunction: () => void) {
        super();
        this.rollHeroBothDiceStep = new RollHeroBothDiceStep(hero, this.rollHeroBothDiceStepEnded);
    }

    public rollHeroBothDiceStepEnded = (): void => {
        console.log(this.hero.name + " has rolled both his/her dice.");
        if (this.hero.inventory.lightDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            this.hero.inventory.addGoldNuggets(this.hero.inventory.lightDie.lastRolledFace.goldNuggetsQuantity);
            this.hero.inventory.addSunShards(this.hero.inventory.lightDie.lastRolledFace.sunShardsQuantity);
            this.hero.inventory.addMoonShards(this.hero.inventory.lightDie.lastRolledFace.moonShardsQuantity);
            this.hero.inventory.addGloryPoints(this.hero.inventory.lightDie.lastRolledFace.gloryPointsQuantity);
            this.applyLightDieFaceEffectsStep = new DoneStep();
            this.applyLightDieFaceEffectsStepEnded();
        } else {
            this.applyLightDieFaceEffectsStep = new ApplyDieFaceEffectsStep(this.hero.inventory.lightDie.lastRolledFace, this.hero, this.applyLightDieFaceEffectsStepEnded);
        }
        if (this.hero.inventory.darkDie.lastRolledFace.type == DieFaceType.GAIN_ALL_RESOURCES) {
            this.hero.inventory.addGoldNuggets(this.hero.inventory.darkDie.lastRolledFace.goldNuggetsQuantity);
            this.hero.inventory.addSunShards(this.hero.inventory.darkDie.lastRolledFace.sunShardsQuantity);
            this.hero.inventory.addMoonShards(this.hero.inventory.darkDie.lastRolledFace.moonShardsQuantity);
            this.hero.inventory.addGloryPoints(this.hero.inventory.darkDie.lastRolledFace.gloryPointsQuantity);
            this.applyDarkDieFaceEffectsStep = new DoneStep();
            this.applyDarkDieFaceEffectsStepEnded();
        } else {
            this.applyDarkDieFaceEffectsStep = new ApplyDieFaceEffectsStep(this.hero.inventory.darkDie.lastRolledFace, this.hero, this.applyDarkDieFaceEffectsStepEnded);
        }
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
        if (this.applyLightDieFaceEffectsStep && this.applyLightDieFaceEffectsStep.isDone && this.applyDarkDieFaceEffectsStep &&  this.applyDarkDieFaceEffectsStep.isDone) {
            this.applyLightDieFaceEffectsStep = null;
            this.applyDarkDieFaceEffectsStep = null;
            this.isDone = true;
            this.callbackFunction();
        }
    };
}