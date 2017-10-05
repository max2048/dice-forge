import {BaseObject} from './base-object';
import {HeroicFeatEffectType} from './heroic-feat-effect-type';
import {Step} from "./steps/step";
import {Game} from "./game";

export abstract class HeroicFeat extends BaseObject {

    abstract name: string;
    abstract sunShardsCost: number;
    abstract moonShardsCost: number;
    abstract gloryPoints: number;
    abstract imageFile: string;
    abstract effectType: HeroicFeatEffectType;
    step: Step;

    constructor() {
        super();
    }

    abstract initEffect = (game: Game, callbackFunction: () => void): void => {};

    public toString = () : string => {
        return `HeroicFeat (` +
            `id=[${this.id}], ` +
            `name=[${this.name}], ` +
            `sunShardsCost=[${this.sunShardsCost}], ` +
            `moonShardsCost=[${this.moonShardsCost}], ` +
            `gloryPoints=[${this.gloryPoints}], ` +
            `imageFile=[${this.imageFile}], ` +
            `effectType=[${HeroicFeatEffectType[this.effectType]}]` +
            `)`;
    };
}