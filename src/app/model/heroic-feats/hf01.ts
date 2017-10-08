import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";
import {DoneStep} from "../steps/done-step";

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

    isEffectApplicable = (game: Game): boolean => {
        return game.getActiveHero().inventory.goldNuggets >= 3;
    };

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        console.log(game.getActiveHero().name + " wants to trade 3 gold nuggets for 4 glory points.");
        if (!this.isEffectApplicable(game)) {
            throw new Error(game.getActiveHero().name + " can't afford to spend 3 gold nuggets.");
        }
        game.getActiveHero().inventory.addGoldNuggets(-3);
        game.getActiveHero().inventory.addGloryPoints(4);
        this.step = new DoneStep();
        callbackFunction();
    };
}
