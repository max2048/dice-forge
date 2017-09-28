import {HeroicFeat} from '../heroic-feat';
import {HeroicFeatTypeEffect} from '../heroic-feat-type-effect';

export class Hf02 extends HeroicFeat {

    readonly name : string = "Wild Spirits"; 
    readonly sunShardsCost: number = 1;
    readonly moonShardsCost: number = 0;
    readonly gloryPoints: number = 2;
    readonly imageFile: string = "heroic-feats/hf02.png";
    readonly heroFeatTypeEffect: HeroicFeatTypeEffect = HeroicFeatTypeEffect.INSTANT;

    constructor() {
        super();
    }

    public activeEffect() : void {
    };
}