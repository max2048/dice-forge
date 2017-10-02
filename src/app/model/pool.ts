import {DieFace} from "./die-face";

export class Pool {

    readonly dieFaces: DieFace[];

    constructor(readonly dieFaceCost: number) {
        this.dieFaces = [];
    }

    public addDieFace = (dieFace: DieFace): void => {
        if (dieFace.cost != this.dieFaceCost) {
            throw new Error("The die face cost (" + dieFace.cost + ") doesn't match the pool cost (" + this.dieFaceCost + ").");
        }
        this.dieFaces.push(dieFace);
    };

    public containsDiceFace = (dieFace: DieFace): boolean => {
        return this.dieFaces.indexOf(dieFace) >= 0;
    };

    public removeDieFace = (dieFace: DieFace): boolean => {
        let dieFaceIndex: number = this.dieFaces.indexOf(dieFace);
        if (dieFaceIndex >= 0) {
            return (this.dieFaces.splice(dieFaceIndex, 1) != null);
        }
        return false;
    };

    public toString = (): string => {
        return `Pool (` +
            `dieFaceCost=[${this.dieFaceCost}], ` +
            `dieFaces=[${this.dieFaces}]` +
            `)`;
    };
}