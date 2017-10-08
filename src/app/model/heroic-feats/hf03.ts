import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";
import {Hf03Step} from "../steps/heroic-feats/hf03-step";

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

    isEffectApplicable = (game: Game): boolean => {
        return true;
    };

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        this.step = new Hf03Step(game, callbackFunction);
    };
}