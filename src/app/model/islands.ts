import {Hf01} from "./heroic-feats/hf01";
import {Hf02} from "./heroic-feats/hf02";
import {Portal} from "./portal";
import {Slot} from "./slot";
import {Hf03} from "./heroic-feats/hf03";
import {Hf04} from "./heroic-feats/hf04";
import {HeroicFeat} from "./heroic-feat";
import {Hero} from "./hero";
import {Hf05} from "./heroic-feats/hf05";

export class Islands {

    portals: Portal[] = [];

    constructor(cardsPerStack: number = 0) {
        let slot1: Slot;
        let slot2: Slot;

        slot1 = new Slot(1, 0);
        slot2 = new Slot(1, 0);
        for (let i = 0; i < cardsPerStack; i++) {
            slot1.heroicFeats.push(new Hf01());
            slot2.heroicFeats.push(new Hf02());
        }
        this.portals.push(new Portal([slot1, slot2]));

        slot1 = new Slot(2, 0);
        slot2 = new Slot(3, 0);
        for (let i = 0; i < cardsPerStack; i++) {
            slot1.heroicFeats.push(new Hf03());
            slot2.heroicFeats.push(new Hf04());
        }
        this.portals.push(new Portal([slot1, slot2]));

        slot1 = new Slot(4, 0);
        slot2 = new Slot(5, 0);
        for (let i = 0; i < cardsPerStack; i++) {
            slot1.heroicFeats.push(new Hf05());
            //slot2.heroicFeats.push(new Hf06());
        }
        this.portals.push(new Portal([slot1, slot2]));
    }

    public findPortalContainingHeroicFeat = (heroicFeat: HeroicFeat): Portal => {
        for (let portal of this.portals) {
            if (portal.findSlotContainingHeroicFeat(heroicFeat) != null) {
                return portal;
            }
        }
        return null;
    };

    public containsAffordableHeroicFeats = (sunShards : number, moonShards: number): boolean => {
        for (let portal of this.portals) {
            if (portal.containsAffordableHeroicFeats(sunShards, moonShards)) {
                return true;
            }
        }
        return false;
    };

    public removeHeroicFeatFromPortal = (heroicFeat: HeroicFeat): void => {
        let portal = this.findPortalContainingHeroicFeat(heroicFeat);
        if (!portal) {
            throw new Error("Cannot find a portal containing the selected heroic feat.");
        }
        portal.removeHeroicFeat(heroicFeat);
    };

    public removeHeroFromAnyPortal = (hero: Hero): void => {
        for (let portal of this.portals) {
            if (portal.hero === hero) {
                portal.hero = null;
            }
        }
    };

    public toString = (): string => {
        return `Islands (` +
            `portals=[${this.portals}]` +
            `)`;
    };
}