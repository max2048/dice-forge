import {BaseObject} from './base-object';
import {DieFaceType} from './die-face-type';

export class DieFace extends BaseObject {

    constructor(readonly cost: number,
                readonly goldNuggetsQuantity: number,
                readonly sunShardsQuantity: number,
                readonly moonShardsQuantity: number,
                readonly gloryPointsQuantity: number,
                readonly imageFile: string,
                readonly type: DieFaceType = null) {
        super();
    }

    public toString = () : string => {
        let resources: string[] = [];
        if (this.goldNuggetsQuantity != 0) {
            resources.push("goldNuggets=[" + this.goldNuggetsQuantity +"]");
        }
        if (this.sunShardsQuantity != 0) {
            resources.push("sunShards=[" + this.sunShardsQuantity +"]");
        }
        if (this.moonShardsQuantity != 0) {
            resources.push("moonShards=[" + this.moonShardsQuantity +"]");
        }
        if (this.gloryPointsQuantity != 0) {
            resources.push("gloryPoints=[" + this.gloryPointsQuantity +"]");
        }
        return `DieFace (` +
            `id=[${this.id}], ` +
            `cost=[${this.cost}], ` +
            `imageFile=[${this.imageFile}], ` +
            (resources.length > 1 ? resources.join(" " + DieFaceType[this.type] + " ") : resources[0]) +
            `)`;
    };
}