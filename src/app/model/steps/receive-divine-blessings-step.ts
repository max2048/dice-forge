import {Step} from "./step";
import {StepType} from "./step-type";
import {Game} from "../game";
import {Hero} from "../hero";
import {DieFace} from "../die-face";

export class ReceiveDivineBlessingsStep implements Step {

    TYPE = StepType.RECEIVE_DIVINE_BLESSINGS;

    divineBlessingsCurrentHeroIndex: number;

    constructor(readonly game: Game) {
        this.divineBlessingsCurrentHeroIndex = this.game.activeHeroIndex;
    }

    public nextDivineBlessingsHero = (): void => {
        this.divineBlessingsCurrentHeroIndex = (this.divineBlessingsCurrentHeroIndex + 1) % this.game.heroes.length;

        // If we're back to the active hero, then we're done with the divine blessings
        if (this.divineBlessingsCurrentHeroIndex == this.game.activeHeroIndex) {
            this.game.receiveDivineBlessingsEnded();
        }
    };
    public getDivineBlessingsCurrentHero = (): Hero => {
        return this.game.heroes[this.divineBlessingsCurrentHeroIndex];
    };

    execute(): void {
        console.log("Rolling light die for " + this.getDivineBlessingsCurrentHero().name + "...");
        let rolledLightDie:DieFace = this.getDivineBlessingsCurrentHero().inventory.lightDie.roll();
        this.getDivineBlessingsCurrentHero().receiveMinorBlessing(rolledLightDie);

        console.log("Rolling dark die for " + this.getDivineBlessingsCurrentHero().name + "...");
        let rolledDarkDie:DieFace = this.getDivineBlessingsCurrentHero().inventory.darkDie.roll();
        this.getDivineBlessingsCurrentHero().receiveMinorBlessing(rolledDarkDie);

        this.nextDivineBlessingsHero();
    }
}