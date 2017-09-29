import {DieFace} from './die-face';
import {DieFaceType} from "./die-face-type";
import {Pool} from "./pool";

export class Sanctuary {

    pools: Pool[] = [];

    constructor(dieFacePerPool: number) {
        let pool: Pool = new Pool(2);
        pool.addDieFace(new DieFace(2, 3, 0, 0, 0, "die-faces/df03.png"));
        pool.addDieFace(new DieFace(2, 3, 0, 0, 0, "die-faces/df03.png"));
        pool.addDieFace(new DieFace(2, 3, 0, 0, 0, "die-faces/df03.png"));
        pool.addDieFace(new DieFace(2, 3, 0, 0, 0, "die-faces/df03.png"));
        this.pools.push(pool);

        pool = new Pool(2);
        pool.addDieFace(new DieFace(2, 0, 0, 1, 0, "die-faces/df04.png"));
        pool.addDieFace(new DieFace(2, 0, 0, 1, 0, "die-faces/df04.png"));
        pool.addDieFace(new DieFace(2, 0, 0, 1, 0, "die-faces/df04.png"));
        pool.addDieFace(new DieFace(2, 0, 0, 1, 0, "die-faces/df04.png"));
        this.pools.push(pool);

        pool = new Pool(3);
        pool.addDieFace(new DieFace(3, 4, 0, 0, 0, "die-faces/df05.png"));
        pool.addDieFace(new DieFace(3, 4, 0, 0, 0, "die-faces/df05.png"));
        pool.addDieFace(new DieFace(3, 4, 0, 0, 0, "die-faces/df05.png"));
        pool.addDieFace(new DieFace(3, 4, 0, 0, 0, "die-faces/df05.png"));
        this.pools.push(pool);

        pool = new Pool(3);
        pool.addDieFace(new DieFace(3, 0, 1, 0, 0, "die-faces/df06.png"));
        pool.addDieFace(new DieFace(3, 0, 1, 0, 0, "die-faces/df06.png"));
        pool.addDieFace(new DieFace(3, 0, 1, 0, 0, "die-faces/df06.png"));
        pool.addDieFace(new DieFace(3, 0, 1, 0, 0, "die-faces/df06.png"));
        this.pools.push(pool);

        pool = new Pool(4);
        pool.addDieFace(new DieFace(4, 1, 1, 1, 0, "die-faces/df07.png", DieFaceType.OR));
        pool.addDieFace(new DieFace(4, 6, 0, 0, 0, "die-faces/df08.png"));
        pool.addDieFace(new DieFace(4, 2, 0, 1, 0, "die-faces/df09.png", DieFaceType.AND));
        pool.addDieFace(new DieFace(4, 0, 1, 0, 1, "die-faces/df10.png", DieFaceType.AND));
        this.pools.push(pool);

        pool = new Pool(5);
        pool.addDieFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.OR));
        pool.addDieFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.OR));
        pool.addDieFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.OR));
        pool.addDieFace(new DieFace(5, 3, 0, 0, 2, "die-faces/df11.png", DieFaceType.OR));
        this.pools.push(pool);

        pool = new Pool(6);
        pool.addDieFace(new DieFace(6, 0, 0, 2, 0, "die-faces/df12.png"));
        pool.addDieFace(new DieFace(6, 0, 0, 2, 0, "die-faces/df12.png"));
        pool.addDieFace(new DieFace(6, 0, 0, 2, 0, "die-faces/df12.png"));
        pool.addDieFace(new DieFace(6, 0, 0, 2, 0, "die-faces/df12.png"));
        this.pools.push(pool);

        pool = new Pool(8);
        pool.addDieFace(new DieFace(8, 0, 2, 0, 0, "die-faces/df13.png"));
        pool.addDieFace(new DieFace(8, 0, 2, 0, 0, "die-faces/df13.png"));
        pool.addDieFace(new DieFace(8, 0, 2, 0, 0, "die-faces/df13.png"));
        pool.addDieFace(new DieFace(8, 0, 2, 0, 0, "die-faces/df13.png"));
        this.pools.push(pool);

        pool = new Pool(8);
        pool.addDieFace(new DieFace(8, 0, 0, 0, 3, "die-faces/df14.png"));
        pool.addDieFace(new DieFace(8, 0, 0, 0, 3, "die-faces/df14.png"));
        pool.addDieFace(new DieFace(8, 0, 0, 0, 3, "die-faces/df14.png"));
        pool.addDieFace(new DieFace(8, 0, 0, 0, 3, "die-faces/df14.png"));
        this.pools.push(pool);

        pool = new Pool(12);
        pool.addDieFace(new DieFace(12, 1, 1, 1, 1, "die-faces/df15.png", DieFaceType.AND));
        pool.addDieFace(new DieFace(12, 2, 2, 2, 0, "die-faces/df16.png", DieFaceType.OR));
        pool.addDieFace(new DieFace(12, 0, 0, 2, 2, "die-faces/df17.png", DieFaceType.AND));
        pool.addDieFace(new DieFace(12, 0, 0, 0, 4, "die-faces/df18.png"));
        this.pools.push(pool);

        // Randomly remove die faces from each pool
        for (pool of this.pools) {
            while (pool.dieFaces.length > dieFacePerPool) {
                pool.dieFaces.splice(Math.floor(Math.random() * pool.dieFaces.length), 1);
            }
        }
    }

    public getAffordablePools = (goldNuggetBudget: number): Pool[] => {
        return this.pools.filter(pool => pool.dieFaceCost <= goldNuggetBudget);
    };

    public removeDieFace = (dieFaceId: number): void => {
        for (let pool of this.pools) {
            pool.removeDieFace(dieFaceId);
        }
    };

    public toString = (): string => {
        return `Sanctuary (` +
            `pools=[${this.pools}]` +
            `])`;
    };
}