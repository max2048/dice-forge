import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatTypeEffect} from '../heroic-feat-type-effect';

export class Hf01 extends HeroicFeat {

    readonly name : string = "The Elder"; 
    readonly sunShardsCost: number = 1;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 0;
    readonly imageFile: string = "heroic-feats/hf01.png";
    readonly heroFeatTypeEffect: HeroicFeatTypeEffect = HeroicFeatTypeEffect.REINFORCEMENT;

    constructor() {
        super();
    }

    public activeEffect() : void {
    };
}