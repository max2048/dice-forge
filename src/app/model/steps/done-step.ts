import {Step} from "./step";
import {StepType} from "./step-type";

export class DoneStep extends Step {

    TYPE = StepType.DONE;

    constructor() {
        super();
        this.isDone = true;
    };
}