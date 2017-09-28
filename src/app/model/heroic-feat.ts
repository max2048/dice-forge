import {BaseObject} from './base-object';
import {HeroicFeatTypeEffect} from './heroic-feat-type-effect';

export abstract class HeroicFeat extends BaseObject {

    abstract name: string;
    abstract sunShardsCost: number;
    abstract moonShardsCost: number;
    abstract gloryPoints: number;
    abstract imageFile: string;
    abstract heroFeatTypeEffect: HeroicFeatTypeEffect;

    constructor() {
        super();
    }

    abstract activeEffect() : void;

    public toString = () : string => {
        return `HeroicFeat (` +
            `id=[${this.id}], ` +
            `name=[${this.name}], ` +
            `sunShardsCost=[${this.sunShardsCost}], ` +
            `moonShardsCost=[${this.moonShardsCost}], ` +
            `gloryPoints=[${this.gloryPoints}], ` +
            `imageFile=[${this.imageFile}]` +
            `heroFeatTypeEffect=[${HeroicFeatTypeEffect[this.heroFeatTypeEffect]}]` +
            `)`;
    };
}