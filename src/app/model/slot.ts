import {BaseObject} from './base-object';
import {HeroicFeat} from "./heroic-feat";

export class Slot extends BaseObject {

    constructor(readonly sunShardsCost: number = 0,
                readonly moonShardsCost: number = 0,
                public heroicFeats: HeroicFeat[] = []) {
        super();
    }

    public toString = (): string => {
        return `Slot (` +
            `sunShardsCost=[${this.sunShardsCost}], ` +
            `moonShardsCost=[${this.moonShardsCost}], ` +
            `heroicFeats=[${this.heroicFeats}]` +
            `)`;
    };
}