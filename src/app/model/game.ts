import {Hero} from "./hero";
import {Sanctuary} from "./sanctuary";
import {Islands} from "./islands";

export class Game {

    readonly ROUNDS: number;
    readonly CARDS_PER_STACK: number;
    readonly DIE_FACES_PER_POOL: number;

    currentRound: number;
    heroes: Hero[];
    activeHeroIndex: number;
    sanctuary: Sanctuary;
    islands: Islands;

    constructor(readonly heroNames: string[]) {
        this.heroes = [];
        for (let heroName of heroNames) {
            this.heroes.push(new Hero(heroName));
        }
        switch (this.heroes.length) {
            case 2:
                this.ROUNDS = 9;
                this.DIE_FACES_PER_POOL = 2;
                break;
            case 3:
                this.ROUNDS = 2; // FIXME 10
                this.DIE_FACES_PER_POOL = 4;
                this.heroes[2].inventory.goldNuggets = 1;
                break;
            case 4:
                this.ROUNDS = 9;
                this.DIE_FACES_PER_POOL = 4;
                this.heroes[2].inventory.goldNuggets = 1;
                this.heroes[3].inventory.goldNuggets = 0;
                break;
            default:
                throw new Error("There must be between 2 and 4 heroes.");
        }
        this.heroes[0].inventory.goldNuggets = 3;
        this.heroes[1].inventory.goldNuggets = 2;
        this.CARDS_PER_STACK = this.heroes.length;
        this.currentRound = 1; // 1-based
        this.activeHeroIndex = 0; // 0-based
        this.sanctuary = new Sanctuary(this.DIE_FACES_PER_POOL);
        this.islands = new Islands(this.heroes.length);
    }

    public getActiveHero = (): Hero => {
        return this.heroes[this.activeHeroIndex];
    };

    public endHeroTurn = (): void => {
        this.activeHeroIndex = (this.activeHeroIndex + 1) % this.heroes.length;
        if (this.activeHeroIndex == 0) {
            this.currentRound++;
        }
    };

    public isOver = (): boolean => {
        return (this.currentRound > this.ROUNDS);
    };

    public getWinners = (): Hero[] => {
        let maxScore: number = Math.max.apply(Math, this.heroes.map(hero => hero.inventory.gloryPoints));
        return this.heroes.filter(hero => hero.inventory.gloryPoints == maxScore);
    };
}