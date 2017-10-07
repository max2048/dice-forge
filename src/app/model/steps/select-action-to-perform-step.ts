import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class SelectActionToPerformStep extends Step {

    TYPE = StepType.SELECT_ACTION_TO_PERFORM;

    constructor(readonly game: Game,
                private readonly callbackFunction: (nextStep: StepType) => void) {
        super();
    }

    public canActiveHeroMakeOfferingToGods = (): boolean => {
        let activeHeroInventory = this.game.getActiveHero().inventory;
        return (this.game.sanctuary.getAffordablePools(activeHeroInventory.goldNuggets).length > 0);
    };

    public canActiveHeroPerformHeroicFeat = (): boolean => {
        let activeHeroInventory = this.game.getActiveHero().inventory;
        return this.game.islands.containsAffordableHeroicFeats(activeHeroInventory.sunShards, activeHeroInventory.moonShards);
    };

    public selectMakeOfferingToGods = (): void => {
        this.isDone = true;
        this.callbackFunction(StepType.MAKE_OFFERING_TO_GODS);
    };

    public selectPerformHeroicFeat = (): void => {
        this.isDone = true;
        this.callbackFunction(StepType.PERFORM_HEROIC_FEAT);
    };

    public finish = (): void => {
        this.isDone = true;
        this.callbackFunction(null);
    };
}