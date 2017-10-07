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

    public containsAffordableHeroicFeats = (sunShardsBudget : number, moonShardsBudget: number): boolean => {
        for (let slot of this.slots) {
            if (slot.sunShardsCost <= sunShardsBudget && slot.moonShardsCost <= moonShardsBudget && slot.heroicFeats.length > 0) {
                return true;
            }
        }
        return false;
    };

    public removeHeroicFeat = (heroicFeat: HeroicFeat): boolean => {
        for (let slot of this.slots) {
            let heroicFeatIndex: number = slot.heroicFeats.indexOf(heroicFeat);
            if (heroicFeatIndex >= 0) {
                return (slot.heroicFeats.splice(heroicFeatIndex, 1) != null);
            }
        }
        return false;
    };

    public toString = (): string => {
        return `Portal (` +
            `slots=[${this.slots}], ` +
            `hero=[${this.hero}]` +
            `)`;
    };
}