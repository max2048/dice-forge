import {Step} from "../step";
import {Game} from "../../game";

export class Hf03Step extends Step {

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    public takeGoldNugget = (): void => {
        this.game.getActiveHero().inventory.addGoldNuggets(1);
        this.finish();
    };

    public takeSunShard = (): void => {
        this.game.getActiveHero().inventory.addSunShards(1);
        this.finish();
    };

    public takeMoonShard = (): void => {
        this.game.getActiveHero().inventory.addMoonShards(1);
        this.finish();
    };

    private finish = (): void => {
        this.isDone = true;
        this.callbackFunction();
    };
}