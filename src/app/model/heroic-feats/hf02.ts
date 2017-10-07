import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";

export class Hf02 extends HeroicFeat {

    readonly name: string = "Wild Spirits";
    readonly sunShardsCost: number = 1;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 2;
    readonly imageFile: string = "heroic-feats/hf02.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.INSTANT;

    constructor() {
        super();
    }

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        console.log(game.getActiveHero().name + " gains 3 golds nuggets and 3 moon shards.");
        game.getActiveHero().inventory.addGoldNuggets(3);
        game.getActiveHero().inventory.addMoonShards(3);
        callbackFunction();
    };
}