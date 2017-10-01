import {Step} from "./step";
import {StepType} from "./step-type";
import {Die} from "../die";

export class RollSingleDieStep extends Step {

    TYPE = StepType.ROLL_SINGLE_DIE;

    constructor(readonly die: Die,
                readonly callbackFunction: () => void) {
        super();
    }

    public rollDie = (): void => {
        if (this.isDone) {
            throw new Error("You have already rolled this die.");
        }
        this.die.roll();
        this.isDone = true;
        this.callbackFunction();
    };
}