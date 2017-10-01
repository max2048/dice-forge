import {BaseObject} from "./base-object";
import {Inventory} from "./inventory";

export class Hero extends BaseObject {

    readonly inventory: Inventory = new Inventory();

    constructor(readonly name: string) {
        super();
    }

    public rollLightDie = (): void => {
        console.log(this.name + " is rolling his/her light die.");
        this.inventory.lightDie.roll();
    };

    public rollDarkDie = (): void => {
        console.log(this.name + " is rolling his/her dark die.");
        this.inventory.darkDie.roll();
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

    public toString = () : string => {
        return `Hero (` +
            `id=[${this.id}], ` +
            `name=[${this.name}]` +
            `inventory=[${this.inventory.toString()}]` +
            `)`;
    };
}