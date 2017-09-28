import {Hf01} from "./heroic-feat/hf01";
import {Hf02} from "./heroic-feat/hf02";
import {Portal} from "./portal";

export class Islands {

    portals: Portal[] = [];

    constructor(numberOfPlayers: number = 0) {
        let hf01s: Hf01[] = [];
        let hf02s: Hf02[] = [];
        for(let i = 0; i < numberOfPlayers; i++) {
            hf01s.push(new Hf01());
            hf02s.push(new Hf02());
        }
        this.portals.push(new Portal(hf01s.concat(hf02s)));
    }

    public toString = () : string => {
        return `Islands (` +
            `portals=[${this.portals}]` +
            `)`;
    };
}