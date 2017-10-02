import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class MakeOfferingToGodsStep extends Step {

    TYPE = StepType.MAKE_OFFERING_TO_GODS;

    constructor(private readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    todo(): void {
        console.log("An offering to the Gods was made.");
        this.callbackFunction();
    }
}