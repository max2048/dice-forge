import {Hero} from "./hero";
import {Sanctuary} from "./sanctuary";

export class Game {

    static readonly ROUNDS: number = 10;

    heroes: Hero[] = [];
    sanctuary: Sanctuary = new Sanctuary();
    hasStarted = false;
    isOver = false;
    currentRound: number = null;
    currentHeroIndex: number = null;

    constructor() {
        console.log("*** A NEW GAME BEGINS ***\n");
    }

    public addHero = (name: string) : void => {
        if (this.hasStarted) {
            console.log("Cannot add a hero after the game has started.");
            return;
        }
        let hero: Hero = new Hero(name);
        switch (this.heroes.length) {
            case 0:
                hero.inventory.addGoldNuggets(3);
                break;
            case 1:
                hero.inventory.addGoldNuggets(2);
                break;
            case 2:
                hero.inventory.addGoldNuggets(1);
                break;
        }
        this.heroes.push(hero);
    };

    public start = () : void => {
        if (this.hasStarted) {
            console.log("The game has already started.");
            return;
        }
        if (this.heroes.length < 2 || this.heroes.length > 4) {
            console.log("There must be between 2 and 4 heroes.");
            return;
        }
        this.hasStarted = true;
        this.currentRound = 1; // 1-based
        this.currentHeroIndex = 0; // 0-based
    };

    public playHeroTurn = () : void => {
        let currentHero: Hero = this.heroes[this.currentHeroIndex];

        console.log("This is " + currentHero.name + "'s turn in round #" + this.currentRound);

        console.log("All heroes receive their divine blessings...");
        for (let hero of this.heroes) {
            console.log(hero.name + " receives his/her divine blessing");
            hero.receiveDivineBlessings();
            console.log(hero.toString());
        }

        console.log(currentHero.name + " may call for reinforcements");
        // TODO

        console.log(currentHero.name + " performs an action");
        // ActionType actionType = currentHero.pickAction(currentHero.getName() + ", please select an action : ");
        // switch (actionType) {
        //     case MAKE_AN_OFFERING_TO_THE_GODS:
               // currentHero.makeAnOfferingToTheGods(this.sanctuary, currentHero.name + ", please select the die face you want to buy : ");
                //console.log("After the offering : " + hero.toString());
            //     break;
            // case PERFORM_AN_HEROIC_FEAT:
            //     console.log("Not yet implemented");
            //     break;
        // }

        // Preparing next turn
        this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroes.length;
        if (this.currentHeroIndex == 0) {
            this.currentRound++;
            if (this.currentRound > Game.ROUNDS) {
                console.log("The game is over.");
                this.isOver = true;
            }
        }
    };
}