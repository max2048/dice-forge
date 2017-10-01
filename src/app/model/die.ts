import {BaseObject} from './base-object';
import {DieFace} from './die-face';

export class Die extends BaseObject {

    readonly faces: DieFace[] = [];
    lastRolledFace: DieFace;

    public addFace = (dieFace: DieFace) : void => {
        this.faces.push(dieFace);
    };

    public forgeFace = (index: number, dieFace: DieFace) : void => {
        this.lastRolledFace = dieFace;
        this.faces[index] = dieFace;
    };

    public roll = () : DieFace => {
        this.lastRolledFace = this.faces[Math.floor(Math.random() * this.faces.length)];
        return this.lastRolledFace;
    };

    public toString = () : string => {
        return `Die (` +
            `id=[${this.id}], ` +
            `lastRolledFace=[${this.lastRolledFace}], ` +
            `faces=[${this.faces}]` +
            `)`;
    };
}