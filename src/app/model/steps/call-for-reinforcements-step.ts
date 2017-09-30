import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class CallForReinforcementsStep implements Step {

    TYPE = StepType.CALL_FOR_REINFORCEMENTS;

    constructor(readonly game: Game) {
    }

    execute(): void {
        console.log("Reinforcements were called");
        this.game.callForReinforcementsStepEnded();
    }
}