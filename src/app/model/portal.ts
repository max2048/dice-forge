import {BaseObject} from './base-object';
import {HeroicFeat} from './heroic-feat';
import {Hero} from './hero';

export class Portal extends BaseObject {

    readonly hero: Hero;

    constructor(readonly heroicFeats: HeroicFeat[]) {
        super();
    }

    isBusy(): boolean {
        return this.hero != null;
    }

    public toString = () : string => {
        return `Portal (` +
            `heroicFeats=[${this.heroicFeats}], ` +
            `hero=[${this.hero}]` +
            `)`;
    };
}