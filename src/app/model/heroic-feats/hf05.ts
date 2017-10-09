import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatEffectType} from '../heroic-feat-effect-type';
import {Game} from "../game";
import {DoneStep} from "../steps/done-step";

export class Hf05 extends HeroicFeat {
    readonly name: string = "Gorgon";
    readonly sunShardsCost: number = 4;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 14;
    readonly imageFile: string = "heroic-feats/hf05.png";
    readonly effectType: HeroicFeatEffectType = HeroicFeatEffectType.NONE;
    readonly description: string = "No effect, only glory points.";

    constructor() {
        super();
    }

    isEffectApplicable = (game: Game): boolean => {
        return false;
    };

    initEffect = (game: Game,  callbackFunction: () => void): void => {
        this.step = new DoneStep();
        callbackFunction();
    };
}