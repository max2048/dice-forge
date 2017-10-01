import {StepType} from "./step-type";

export abstract class Step {

    readonly TYPE: StepType;
    isDone: boolean;
}