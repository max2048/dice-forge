import {DieFace} from "./die-face";

export class Pool {

    dieFaces: DieFace[];

    constructor(readonly dieFaceCost: number) {
        this.dieFaces = [];
    }

    public addDieFace = (dieFace: DieFace): void => {
        if (dieFace.cost != this.dieFaceCost) {
            throw new Error("The die face cost (" + dieFace.cost + ") doesn't match the pool cost (" + this.dieFaceCost + ").");
        }
        this.dieFaces.push(dieFace);
    };

    public removeDieFace = (dieFaceId: number): void => {
        this.dieFaces = this.dieFaces.filter(dieFace => dieFace.id !== dieFaceId);
    };

    public toString = () : string => {
        return `Pool (` +
            `dieFaceCost=[${this.dieFaceCost}], ` +
            `dieFaces=[${this.dieFaces}]` +
            `)`;
    };
}