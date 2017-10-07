import {Hero} from "./hero";
import {Sanctuary} from "./sanctuary";
import {Islands} from "./islands";
import {Step} from "./steps/step";
import {ReceiveDivineBlessingsStep} from "./steps/receive-divine-blessings-step";
import {CallForReinforcementsStep} from "./steps/call-for-reinforcements-step";
import {SelectActionToPerformStep} from "./steps/select-action-to-perform-step";
import {StepType} from "./steps/step-type";
import {MakeOfferingToGodsStep} from "./steps/make-offering-to-gods-step";
import {PerformHeroicFeatStep} from "./steps/perform-heroic-feat-step";
import {SelectExtraActionToPerformStep} from "./steps/select-extra-action-to-perform-step";
import {DieFace} from "./die-face";

export class Game {

    readonly ROUNDS: number;
    readonly CARDS_PER_STACK: number;
    readonly DIE_FACES_PER_POOL: number;
    readonly PERFORM_DIVINE_BLESSINGS_STEP_TWICE_PER_TURN: boolean;

    heroes: Hero[];
    sanctuary: Sanctuary;
    islands: Islands;

    currentRound: number;
    activeHeroIndex: number;
    currentStep: Step;
    divineBlessingsStepAlreadyPerformedTwiceThisTurn;

    constructor(readonly heroNames: string[]) {
        this.heroes = [];
        for (let heroName of heroNames) {
            this.heroes.push(new Hero(heroName));
        }
        switch (this.heroes.length) {
            case 2:
                this.ROUNDS = 9;
                this.DIE_FACES_PER_POOL = 2;
                this.PERFORM_DIVINE_BLESSINGS_STEP_TWICE_PER_TURN = true;
                break;
            case 3:
                this.ROUNDS = 2; // FIXME 10
                this.DIE_FACES_PER_POOL = 4;
                this.PERFORM_DIVINE_BLESSINGS_STEP_TWICE_PER_TURN = false;
                this.heroes[2].inventory.goldNuggets = 1;
                this.heroes[0].inventory.sunShards = 6; // REMOVE ME
                this.heroes[1].inventory.sunShards = 6; // REMOVE ME
                this.heroes[2].inventory.sunShards = 6; // REMOVE ME
                break;
            case 4:
                this.ROUNDS = 9;
                this.DIE_FACES_PER_POOL = 4;
                this.PERFORM_DIVINE_BLESSINGS_STEP_TWICE_PER_TURN = false;
                this.heroes[2].inventory.goldNuggets = 1;
                this.heroes[3].inventory.goldNuggets = 0;
                break;
            default:
                throw new Error("There must be between 2 and 4 heroes.");
        }
        this.heroes[0].inventory.goldNuggets = 3;
        this.heroes[1].inventory.goldNuggets = 2;
        this.CARDS_PER_STACK = this.heroes.length;
        this.sanctuary = new Sanctuary(this.DIE_FACES_PER_POOL);
        this.islands = new Islands(this.heroes.length);
        this.currentRound = 1; // 1-based
        this.activeHeroIndex = 0; // 0-based
        this.currentStep = new ReceiveDivineBlessingsStep(this, this.receiveDivineBlessingsStepEnded);
        this.divineBlessingsStepAlreadyPerformedTwiceThisTurn = false;
    }

    public getActiveHero = (): Hero => {
        return this.heroes[this.activeHeroIndex];
    };

    public isOver = (): boolean => {
        return (this.currentRound > this.ROUNDS);
    };

    public getWinners = (): Hero[] => {
        let maxScore: number = Math.max.apply(Math, this.heroes.map(hero => hero.inventory.gloryPoints));
        return this.heroes.filter(hero => hero.inventory.gloryPoints == maxScore);
    };

    public endHeroTurn = (): void => {
        this.activeHeroIndex = (this.activeHeroIndex + 1) % this.heroes.length;
        if (this.activeHeroIndex == 0) {
            this.currentRound++;
        }
        this.currentStep = new ReceiveDivineBlessingsStep(this, this.receiveDivineBlessingsStepEnded);
    };

    private receiveDivineBlessingsStepEnded = (): void => {
        console.log("Step allHeroesReceiveDivineBlessings has ended.");
        if (this.PERFORM_DIVINE_BLESSINGS_STEP_TWICE_PER_TURN && !this.divineBlessingsStepAlreadyPerformedTwiceThisTurn) {
            this.divineBlessingsStepAlreadyPerformedTwiceThisTurn = true;
            this.currentStep = new ReceiveDivineBlessingsStep(this, this.receiveDivineBlessingsStepEnded);
        } else if (this.getActiveHero().inventory.getReinforcementHeroicFeatCards().length > 0) {
            this.currentStep = new CallForReinforcementsStep(this, this.callForReinforcementsStepEnded);
        } else {
            this.currentStep = new SelectActionToPerformStep(this, this.selectActionToPerformEnded);
        }
    };

    private callForReinforcementsStepEnded = (): void => {
        console.log("Step callForReinforcements has ended.");
        this.currentStep = new SelectActionToPerformStep(this, this.selectActionToPerformEnded);
    };

    private selectActionToPerformEnded = (nextStep: StepType): void => {
        console.log("Step selectActionToPerform has ended.");
        console.log("Action to perform: " + nextStep);
        switch (nextStep) {
            case null:
                this.currentStep = null;
                this.endHeroTurn();
                break;
            case StepType.MAKE_OFFERING_TO_GODS:
                this.currentStep = new MakeOfferingToGodsStep(this, this.makeOfferingToGodsStepEnded);
                break;
            case StepType.PERFORM_HEROIC_FEAT:
                this.currentStep = new PerformHeroicFeatStep(this, this.performHeroicFeatStepEnded);
                break;
            default:
                // Invalid choice
                throw new Error("Hero made an invalid choice : [" + nextStep + "]");
        }
    };

    private canActiveHeroAffordExtraAction = (): boolean => {
        return (this.getActiveHero().inventory.sunShards >= 2);
    };

    private makeOfferingToGodsStepEnded = (): void => {
        console.log("Step makeOfferingToGodsStep has ended.");
        if (this.canActiveHeroAffordExtraAction()) {
            this.currentStep = new SelectExtraActionToPerformStep(this.getActiveHero(), this.selectExtraActionToPerformEnded);
        } else {
            this.endHeroTurn();
        }
    };

    private performHeroicFeatStepEnded = (): void => {
        console.log("Step performHeroicFeatStep has ended.");
        if (this.canActiveHeroAffordExtraAction()) {
            this.currentStep = new SelectExtraActionToPerformStep(this.getActiveHero(), this.selectExtraActionToPerformEnded);
        } else {
            this.endHeroTurn();
        }
    };

    private selectExtraActionToPerformEnded = (nextStep: StepType): void => {
        console.log("Step selectExtraActionToPerform has ended.");
        console.log("Extra action to perform: " + nextStep);
        switch (nextStep) {
            case null:
                this.currentStep = null;
                this.endHeroTurn();
                break;
            case StepType.MAKE_OFFERING_TO_GODS:
                this.currentStep = new MakeOfferingToGodsStep(this, this.extraMakeOfferingToGodsStepEnded);
                break;
            case StepType.PERFORM_HEROIC_FEAT:
                this.currentStep = new PerformHeroicFeatStep(this, this.extraPerformHeroicFeatStepEnded);
                break;
            default:
                // Invalid choice
                throw new Error("Hero made an invalid choice : [" + nextStep + "]");
        }
    };

    private extraMakeOfferingToGodsStepEnded = (): void => {
        console.log("Step extraMakeOfferingToGodsStep has ended.");
        this.endHeroTurn();
    };

    private extraPerformHeroicFeatStepEnded = (): void => {
        console.log("Step extraPerformHeroicFeatStep has ended.");
        this.endHeroTurn();
    };

    public forge = (hero: Hero, oldDieFace: DieFace, newDieFace: DieFace): void => {
        if (hero.inventory.goldNuggets < newDieFace.cost) {
            throw new Error(hero.name + " can't afford " + newDieFace);
        }
        if (!this.sanctuary.containsDieFace(newDieFace)) {
            throw new Error("Sanctuary doesn't contain die face " + newDieFace);
        }
        if (!hero.inventory.lightDie.containsFace(oldDieFace) && !hero.inventory.darkDie.containsFace(oldDieFace)) {
            throw new Error(hero.name + " doesn't have a die with face " + newDieFace);
        }

        let newFaceSetOnHeroDie:boolean = hero.inventory.lightDie.setFace(oldDieFace, newDieFace) || hero.inventory.darkDie.setFace(oldDieFace, newDieFace);
        let newFaceRemovedFromSanctuary:boolean = this.sanctuary.removeDieFace(newDieFace);
        hero.inventory.addGoldNuggets(-1 * newDieFace.cost);

        if (!newFaceSetOnHeroDie || !newFaceRemovedFromSanctuary) {
            throw new Error("Something went wrong while forging die face " + newDieFace + " for " + hero.name);
        }
    };
}