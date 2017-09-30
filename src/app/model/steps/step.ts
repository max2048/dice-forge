import {StepType} from "./step-type";

export interface Step {

    readonly TYPE: StepType;

    execute(): void;
}