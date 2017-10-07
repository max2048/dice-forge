import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";

export class Hf03 extends HeroicFeat {

    readonly name: string = "The Gardian's Owl";
    readonly sunShardsCost: number = 2;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 4;
    readonly imageFile: string = "heroic-feats/hf03.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.REINFORCEMENT;
    readonly description: string = "Gain 1 gold nugget, 1 sun shard or 1 moon shard.";

    constructor() {
        super();
    }

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        // TODO
        console.log("Init [The Gardian's Owl] effect");
        callbackFunction();
    };
}