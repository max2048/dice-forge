import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class CallForReinforcementsStep extends Step {

    TYPE = StepType.CALL_FOR_REINFORCEMENTS;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    todo(): void {
        console.log("Reinforcements were called");
        this.callbackFunction();
    }
}