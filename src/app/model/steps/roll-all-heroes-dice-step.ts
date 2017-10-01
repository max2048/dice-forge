import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {RollHeroBothDiceStep} from "./roll-hero-both-dice-step";

export class RollAllHeroesDiceStep extends Step {

    TYPE = StepType.ROLL_ALL_HEROES_DICE;

    rollHeroBothDiceSteps: RollHeroBothDiceStep[] = [];

    constructor(private readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
        for (let hero of game.heroes) {
            this.rollHeroBothDiceSteps.push(new RollHeroBothDiceStep(hero, this.rollHeroBothDiceStepEnded));
        }
    }

    public rollHeroBothDiceStepEnded = (): void => {
        console.log("One of the heroes has rolled both his/her dice.");
        this.checkAllHeroesRolledBothTheirDice();
    };

    private checkAllHeroesRolledBothTheirDice = (): void => {
        if (!this.rollHeroBothDiceSteps.some(rollHeroBothDiceStep => !rollHeroBothDiceStep.isDone)) {
            this.isDone = true;
            this.callbackFunction();
        }
    };
}