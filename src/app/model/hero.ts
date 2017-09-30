import {BaseObject} from "./base-object";
import {Inventory} from "./inventory";
import {DieFace} from "./die-face";
import {DieFaceType} from "./die-face-type";

export class Hero extends BaseObject {

    readonly inventory: Inventory = new Inventory();

    constructor(readonly name: string) {
        super();
    }

    // public receiveDivineBlessings = () : void => {
    //     console.log("Rolling light die...");
    //     this.receiveMinorBlessing(this.inventory.lightDie);
    //     console.log("Rolling dark die...");
    //     this.receiveMinorBlessing(this.inventory.darkDie);
    // };

    public receiveMinorBlessing = (dieFace: DieFace) : void => {
        if (dieFace.type == DieFaceType.OR) {
            let done: boolean = false;
            while (!done) {
                if (!done && dieFace.goldNuggetsQuantity > 0) {
                    if (this.ask(this.name + ", do you take the " + dieFace.goldNuggetsQuantity + " gold nugget(s) ?")) {
                        this.inventory.addGoldNuggets(dieFace.goldNuggetsQuantity);
                        done = true;
                    }
                }
                if (!done && dieFace.sunShardsQuantity > 0) {
                    if (this.ask(this.name + ", do you take the " + dieFace.sunShardsQuantity + " sun shard(s) ?")) {
                        this.inventory.addSunShards(dieFace.sunShardsQuantity);
                        done = true;
                    }
                }
                if (!done && dieFace.moonShardsQuantity > 0) {
                    if (this.ask(this.name + ", do you take the " + dieFace.moonShardsQuantity + " moon shard(s) ?")) {
                        this.inventory.addMoonShards(dieFace.moonShardsQuantity);
                        done = true;
                    }
                }
                if (!done && dieFace.gloryPointsQuantity > 0) {
                    if (this.ask(this.name + ", do you take the " + dieFace.gloryPointsQuantity + " glory point(s) ?")) {
                        this.inventory.addGloryPoints(dieFace.gloryPointsQuantity);
                        done = true;
                    }
                }
            }
        } else {
            this.inventory.addGoldNuggets(dieFace.goldNuggetsQuantity);
            this.inventory.addSunShards(dieFace.sunShardsQuantity);
            this.inventory.addMoonShards(dieFace.moonShardsQuantity);
            this.inventory.addGloryPoints(dieFace.gloryPointsQuantity);
        }
    };

    // public makeAnOfferingToTheGods = (sanctuary: Sanctuary, question: string) : void => {
    //     let affordableDieFaces: DieFace[] = sanctuary.getAffordableDieFaces(this.inventory.goldNuggets);
    //     if (affordableDieFaces.length === 0) {
    //         console.log("No affordable die faces were found.");
    //     } else {
    //         console.log("Here are the die faces you can afford :");
    //         for (var dieFace of affordableDieFaces) {
    //             console.log("[" + dieFace.id + "] " + dieFace);
    //         }
    //         let done: boolean = false;
    //         while (!done) {
    //             console.log("[0] Cancel");
    //             let playerInput: number = parseInt(prompt(question), 10);
    //             if (isNaN(playerInput)) {
    //                 console.log("Your input is invalid.");
    //             } else {
    //                 if (playerInput === 0) {
    //                     done = true;
    //                 } else {
    //                     let selectedDieFace: DieFace = affordableDieFaces.filter(dieFace => dieFace.id === playerInput)[0];
    //                     if (selectedDieFace != null) {
    //                         sanctuary.removeDieFace(selectedDieFace.id);
    //                         // FIXME Allow player to select the die face to replace
    //                         this.inventory.addGoldNuggets(-1 * selectedDieFace.cost);
    //                         console.log(this.name + " offered " + selectedDieFace.cost + " gold nugget(s) to the Gods.");
    //                         this.inventory.lightDie.setFace(0, selectedDieFace);
    //                         done = true;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

    public ask = (question: string) : boolean => {
        let answer: boolean = null;
        while (answer === null) {
            answer = confirm(question);
        }
        return answer;
    };

    public toString = () : string => {
        return `Hero (` +
            `id=[${this.id}], ` +
            `name=[${this.name}]` +
            `inventory=[${this.inventory.toString()}]` +
            `)`;
    };
}