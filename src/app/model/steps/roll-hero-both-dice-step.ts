import {Step} from "./step";
import {StepType} from "./step-type";
import {Hero} from "../hero";
import {RollSingleDieStep} from "./roll-single-die-step";

export class RollHeroBothDiceStep extends Step {

    TYPE = StepType.ROLL_HERO_BOTH_DICE;

    rollLightDieStep: RollSingleDieStep;
    rollDarkDieStep: RollSingleDieStep;

    constructor(readonly hero: Hero,
                private readonly callbackFunction: () => void) {
        super();
        this.rollLightDieStep = new RollSingleDieStep(hero.inventory.lightDie, this.rollLightDieStepEnded);
        this.rollDarkDieStep = new RollSingleDieStep(hero.inventory.darkDie, this.rollDarkDieStepEnded);
    }

    private rollLightDieStepEnded = (): void => {
        console.log("rollLightDieStep has ended.");
        this.checkHeroBothDiceRolled();
    };

    private rollDarkDieStepEnded = (): void => {
        console.log("rollDarkDieStep has ended.");
        this.checkHeroBothDiceRolled();
    };

    private checkHeroBothDiceRolled = (): void => {
        if (this.rollLightDieStep.isDone && this.rollDarkDieStep.isDone) {
            this.isDone = true;
            this.callbackFunction();
        }
    };
}