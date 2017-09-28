export class BaseObject {

    static NEXT_ID = 1;
    readonly id: number;

    constructor() {
        this.id = BaseObject.NEXT_ID++;
    }
}