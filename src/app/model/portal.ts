import {BaseObject} from './base-object';
import {HeroicFeat} from './heroic-feat';
import {Hero} from './hero';
import {Slot} from "./slot";

export class Portal extends BaseObject {

    hero: Hero;

    constructor(readonly slots: Slot[]) {
        super();
    }

    isTaken(): boolean {
        return this.hero != null;
    }

    public findSlotContainingHeroicFeat(heroicFeat: HeroicFeat): Slot {
        for (let slot of this.slots) {
            for (let hf of slot.heroicFeats) {
                if (hf == heroicFeat) {
                    return slot;
                }
            }
        }
        return null;
    };

    public toString = (): string => {
        return `Portal (` +
            `slots=[${this.slots}], ` +
            `hero=[${this.hero}]` +
            `)`;
    };
}