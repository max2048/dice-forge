import {Die} from "./die";
import {DieFace} from "./die-face";

export class Inventory {

    static readonly GOLD_NUGGETS_LIMIT = 12;
    static readonly SUN_SHARDS_LIMIT = 6;
    static readonly MOON_SHARDS_LIMIT = 6;

    static readonly BLACKSMITH_CHEST_GOLD_NUGGETS_BONUS = 4;
    static readonly BLACKSMITH_CHEST_SUN_SHARDS_BONUS = 3;
    static readonly BLACKSMITH_CHEST_MOON_SHARDS_BONUS = 3;

    goldNuggets: number = 0;
    sunShards: number = 0;
    moonShards: number = 0;
    gloryPoints: number = 0;

    blacksmithChests: number = 0;

    lightDie: Die = new Die();
    darkDie: Die = new Die();

    constructor() {
        this.lightDie.addFace(new DieFace(0, 0, 1, 0, 0, "die-faces/df06.png"));
        this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));

        this.darkDie.addFace(new DieFace(0, 0, 0, 0, 2, "die-faces/df02.png"));
        this.darkDie.addFace(new DieFace(0, 0, 0, 1, 0, "die-faces/df04.png"));
        this.darkDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.darkDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.darkDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        this.darkDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));

        // FIXME For tests only
        // this.lightDie.addFace(new DieFace(0, 0, 1, 0, 0, "die-faces/df06.png"));
        // this.lightDie.addFace(new DieFace(0, 1, 0, 0, 0, "die-faces/df01.png"));
        // this.lightDie.addFace(new DieFace(12, 0, 0, 0, 4, "die-faces/df18.png"));
        // this.lightDie.addFace(new DieFace(12, 2, 2, 2, 0, "die-faces/df16.png", DieFaceType.GAIN_ONE_KIND_OF_RESOURCE));
        // this.lightDie.addFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.GAIN_ONE_KIND_OF_RESOURCE));
        // this.lightDie.addFace(new DieFace(12, 1, 1, 1, 1, "die-faces/df15.png"));
        //
        // this.darkDie.addFace(new DieFace(0, 0, 0, 0, 2, "die-faces/df02.png"));
        // this.darkDie.addFace(new DieFace(0, 0, 0, 1, 0, "die-faces/df04.png"));
        // this.darkDie.addFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.GAIN_ONE_KIND_OF_RESOURCE));
        // this.darkDie.addFace(new DieFace(12, 2, 2, 2, 0, "die-faces/df16.png", DieFaceType.GAIN_ONE_KIND_OF_RESOURCE));
        // this.darkDie.addFace(new DieFace(12, 1, 1, 1, 1, "die-faces/df15.png"));
        // this.darkDie.addFace(new DieFace(4, 1, 1, 1, 0, "die-faces/df07.png", DieFaceType.GAIN_ONE_KIND_OF_RESOURCE));
    }

    public getActualGoldNuggetsLimit = () : number => {
        return Inventory.GOLD_NUGGETS_LIMIT + Inventory.BLACKSMITH_CHEST_GOLD_NUGGETS_BONUS * this.blacksmithChests;
    };

    public addGoldNuggets = (quantity: number) : void => {
        if (quantity == 0) {
            return;
        }
        if (quantity > 0) {
            this.goldNuggets = Math.min(this.goldNuggets + quantity, this.getActualGoldNuggetsLimit());
        } else {
            this.goldNuggets = Math.max(this.goldNuggets + quantity, 0);
        }
    };

    public getActualSunShardsLimit = () : number => {
        return Inventory.SUN_SHARDS_LIMIT + Inventory.BLACKSMITH_CHEST_SUN_SHARDS_BONUS * this.blacksmithChests;
    };

    public addSunShards = (quantity: number) : void => {
        if (quantity == 0) {
            return;
        }
        if (quantity > 0) {
            this.sunShards = Math.min(this.sunShards + quantity, this.getActualSunShardsLimit());
        } else {
            this.sunShards = Math.max(this.sunShards + quantity, 0);
        }
    };

    public getActualMoonShardsLimit = () : number => {
        return Inventory.MOON_SHARDS_LIMIT + Inventory.BLACKSMITH_CHEST_MOON_SHARDS_BONUS * this.blacksmithChests;
    };

    public addMoonShards = (quantity: number) : void => {
        if (quantity == 0) {
            return;
        }
        if (quantity > 0) {
            this.moonShards = Math.min(this.moonShards + quantity, this.getActualMoonShardsLimit());
        } else {
            this.moonShards = Math.max(this.moonShards + quantity, 0);
        }
    };

    public addGloryPoints = (quantity: number) : void => {
        if (quantity == 0) {
            return;
        }
        if (quantity > 0) {
            this.gloryPoints += quantity;
        } else {
            this.gloryPoints = Math.max(this.gloryPoints + quantity, 0);
        }
    };

    public addBlacksmithChest = () : void => {
        this.blacksmithChests++;
    };

    public toString = () : string => {
        return `Inventory (` +
            `goldNuggets=[${this.goldNuggets}], ` +
            `sunShards=[${this.sunShards}], ` +
            `moonShards=[${this.moonShards}], ` +
            `gloryPoints=[${this.gloryPoints}], ` +
            `blacksmithChests=[${this.blacksmithChests}], ` +
            `lightDie=[${this.lightDie.toString()}], ` +
            `darkDie=[${this.darkDie.toString()}]` +
            `)`;
    };
}