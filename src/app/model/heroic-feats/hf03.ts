import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";

export class Hf03 extends HeroicFeat {

    readonly name: string = "???";
    readonly sunShardsCost: number = 2;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 4;
    readonly imageFile: string = "heroic-feats/hf03.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.REINFORCEMENT;

    constructor() {
        super();
    }

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        // TODO
    };
}