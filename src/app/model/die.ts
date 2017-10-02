import {BaseObject} from './base-object';
import {DieFace} from './die-face';

export class Die extends BaseObject {

    readonly faces: DieFace[] = [];
    lastRolledFace: DieFace;

    public addFace = (dieFace: DieFace): void => {
        this.faces.push(dieFace);
    };

    public containsFace = (dieFace: DieFace): boolean => {
        return this.faces.indexOf(dieFace) >= 0;
    };

    public setFace = (oldDieFace: DieFace, newDieFace: DieFace): boolean => {
        let oldDieFaceIndex: number = this.faces.indexOf(oldDieFace);
        if (oldDieFaceIndex >= 0) {
            this.faces[oldDieFaceIndex] = newDieFace;
            this.lastRolledFace = newDieFace;
            return true;
        }
        return false;
    };

    public roll = (): DieFace => {
        this.lastRolledFace = this.faces[Math.floor(Math.random() * this.faces.length)];
        return this.lastRolledFace;
    };

    public toString = (): string => {
        return `Die (` +
            `id=[${this.id}], ` +
            `lastRolledFace=[${this.lastRolledFace}], ` +
            `faces=[${this.faces}]` +
            `)`;
    };
}