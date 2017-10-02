import {Step} from "./step";
import {StepType} from "./step-type";

export class SelectActionToPerformStep extends Step {

    TYPE = StepType.SELECT_ACTION_TO_PERFORM;

    constructor(private readonly callbackFunction: (nextStep: StepType) => void) {
        super();
    }

    public selectMakeOfferingToGods = (): void => {
        this.isDone = true;
        this.callbackFunction(StepType.MAKE_OFFERING_TO_GODS);
    };

    public selectPerformHeroicFeat = (): void => {
        this.isDone = true;
        this.callbackFunction(StepType.PERFORM_HEROIC_FEAT);
    };

    public decline = (): void => {
        this.isDone = true;
        this.callbackFunction(null);
    };
}