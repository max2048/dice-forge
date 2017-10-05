import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";

export class Hf04 extends HeroicFeat {
    readonly name: string = "???";
    readonly sunShardsCost: number = 3;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 8;
    readonly imageFile: string = "heroic-feats/hf04.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.INSTANT;

    constructor() {
        super();
    }

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        // TODO
    };
}