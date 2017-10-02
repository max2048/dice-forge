import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class PerformHeroicFeatStep extends Step {

    TYPE = StepType.PERFORM_HEROIC_FEAT;

    constructor(private readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    todo(): void {
        console.log("An Heroic feat was performed.");
        this.callbackFunction();
    }
}