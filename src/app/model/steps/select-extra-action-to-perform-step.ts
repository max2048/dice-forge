import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";

export class SelectExtraActionToPerformStep extends Step {

    TYPE = StepType.SELECT_EXTRA_ACTION_TO_PERFORM;

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
        this.performExtraAction(StepType.MAKE_OFFERING_TO_GODS);
    };

    public selectPerformHeroicFeat = (): void => {
        this.performExtraAction(StepType.PERFORM_HEROIC_FEAT);
    };

    public finish = (): void => {
        this.isDone = true;
        this.callbackFunction(null);
    };

    private performExtraAction = (nextStep: StepType): void => {
        console.log(this.game.getActiveHero().name + " wants to buy an extra action [" + nextStep + "].");
        if (this.game.getActiveHero().inventory.sunShards >= 2) {
            this.game.getActiveHero().inventory.addSunShards(-2);
            this.isDone = true;
            this.callbackFunction(nextStep);
        } else {
            throw new Error("Hero needs to have at least 2 sun shards.");
        }
    };
}