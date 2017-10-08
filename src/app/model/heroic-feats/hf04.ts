import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";

export class Hf04 extends HeroicFeat {
    readonly name: string = "Minotaur";
    readonly sunShardsCost: number = 3;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 8;
    readonly imageFile: string = "heroic-feats/hf04.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.INSTANT;
    readonly description: string = "All other players roll their dice, place them back on their inventory, and apply their effects, but with the following changes: All die faces that normally provide resources (including glory points) cause them to be lost instead / Celestial ship faces have no effect.";

    constructor() {
        super();
    }

    isEffectApplicable = (game: Game): boolean => {
        return true;
    };

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        // TODO
        console.log("Init [Minotaur] effect");
        callbackFunction();
    };
}