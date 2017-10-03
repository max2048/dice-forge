import {Step} from "./step";
import {StepType} from "./step-type";
import {Hero} from "../hero";

export class SelectExtraActionToPerformStep extends Step {

    TYPE = StepType.SELECT_EXTRA_ACTION_TO_PERFORM;

    constructor(readonly hero:Hero,
                private readonly callbackFunction: (nextStep: StepType) => void) {
        super();
    }

    public selectMakeOfferingToGods = (): void => {
        this.performExtraAction(StepType.MAKE_OFFERING_TO_GODS);
    };

    public selectPerformHeroicFeat = (): void => {
        this.performExtraAction(StepType.PERFORM_HEROIC_FEAT);
    };

    public decline = (): void => {
        this.isDone = true;
        this.callbackFunction(null);
    };

    private performExtraAction = (nextStep: StepType): void => {
        console.log(this.hero.name + " wants to buy an extra action [" + nextStep + "].");
        if (this.hero.inventory.sunShards >= 2) {
            this.hero.inventory.addSunShards(-2);
            this.isDone = true;
            this.callbackFunction(nextStep);
        } else {
            throw new Error("Hero needs to have at least 2 sun shards.");
        }
    };
}