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

    public toString = () : string => {
        return `Hero (` +
            `id=[${this.id}], ` +
            `name=[${this.name}]` +
            `inventory=[${this.inventory.toString()}]` +
            `)`;
    };
}