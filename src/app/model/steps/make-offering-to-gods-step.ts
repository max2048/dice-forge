import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {DieFace} from "../die-face";

export class MakeOfferingToGodsStep extends Step {

    TYPE = StepType.MAKE_OFFERING_TO_GODS;

    alreadyBoughtFaces: DieFace[] = [];
    newDieFace: DieFace;
    oldDieFace: DieFace;

    constructor(readonly game: Game,
                private readonly callbackFunction: () => void) {
        super();
    }

    forgeFace = (): void => {
        if (!this.isDone && this.oldDieFace && this.newDieFace) {
            this.game.forge(this.game.getActiveHero(), this.oldDieFace,  this.newDieFace);
            this.alreadyBoughtFaces.push(this.newDieFace);
            this.newDieFace = null;
            this.oldDieFace = null;
        } else {
            throw new Error("The offering to the Gods has already been made.")
        }
    };

    finish = (): void => {
        this.isDone = true;
        this.callbackFunction();
    };
}