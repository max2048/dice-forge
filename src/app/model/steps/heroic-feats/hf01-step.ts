import {Step} from "../step";
import {StepType} from "../step-type";
import {Game} from "../../game";

export class Hf01Step extends Step {

    constructor(readonly game: Game,
                private readonly callbackFunction: (nextStep: StepType) => void) {
        super();
    }

    public tradeGoldNuggetsForGloryPoints = (): void => {
        console.log(this.game.getActiveHero().name + " wants to trade 3 gold nuggets for 4 glory points.");
        if (this.game.getActiveHero().inventory.goldNuggets < 3) {
            throw new Error(this.game.getActiveHero().name + " can't afford to spend 3 gold nuggets.");
        }
        this.game.getActiveHero().inventory.addGoldNuggets(-3);
        this.game.getActiveHero().inventory.addGloryPoints(4);
        this.isDone = true;
        this.callbackFunction(null);
    };

    public decline = (): void => {
        this.isDone = true;
        this.callbackFunction(null);
    };
}