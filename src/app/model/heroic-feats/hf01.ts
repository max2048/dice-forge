import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";
import {Hf01Step} from "../steps/heroic-feats/hf01-step";

export class Hf01 extends HeroicFeat {

    readonly name: string = "The Elder";
    readonly sunShardsCost: number = 1;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 0;
    readonly imageFile: string = "heroic-feats/hf01.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.REINFORCEMENT;
    readonly description: string = "You may spend 3 gold nuggets to gain 4 glory points.";

    constructor() {
        super();
    }

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        this.step = new Hf01Step(game, callbackFunction);
    };
}
