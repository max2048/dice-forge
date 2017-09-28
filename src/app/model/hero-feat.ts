import {BaseObject} from './base-object';
import {HeroFeatTypeEffect} from './hero-feat-type-effect';

export class HeroFeat extends BaseObject {

    constructor(readonly sunShardsCost: number,
                readonly moonShardsCost: number,
                readonly gloryPoints: number,
                readonly imageFile: string,
                readonly heroFeatTypeEffect: HeroFeatTypeEffect) {
        super();
    }

    public toString = () : string => {
        return `HeroFeat (` +
            `id=[${this.id}], ` +
            `sunShardsCost=[${this.sunShardsCost}], ` +
            `moonShardsCost=[${this.moonShardsCost}], ` +
            `gloryPoints=[${this.gloryPoints}], ` +
            `imageFile=[${this.imageFile}]` +
            `)`;
    };
}