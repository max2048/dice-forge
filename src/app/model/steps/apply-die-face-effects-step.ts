import {Step} from "./step";
import {StepType} from "./step-type";
import {DieFace} from "../die-face";
import {Hero} from "../hero";

export class ApplyDieFaceEffectsStep extends Step {

    TYPE = StepType.APPLY_DIE_FACE_EFFECTS;

    constructor(readonly dieFace: DieFace,
                readonly multiplier: number,
                readonly hero: Hero,
                private readonly callbackFunction: () => void) {
        super();
    }

    public takeGoldNuggets = (): void => {
        this.applySelectedDieFaceResources(this.dieFace.goldNuggetsQuantity, 0, 0, 0);
    };

    public takeSunShards = (): void => {
        this.applySelectedDieFaceResources(0, this.dieFace.sunShardsQuantity, 0, 0);
    };

    public takeMoonShards = (): void => {
        this.applySelectedDieFaceResources(0, 0, this.dieFace.moonShardsQuantity, 0);
    };

    public takeGloryPoints = (): void => {
        this.applySelectedDieFaceResources(0, 0, 0, this.dieFace.gloryPointsQuantity);
    };

    public applyAllDieFaceResources = (): void => {
        this.applySelectedDieFaceResources(this.dieFace.goldNuggetsQuantity,
            this.dieFace.sunShardsQuantity,
            this.dieFace.moonShardsQuantity,
            this.dieFace.gloryPointsQuantity);
    };

    private applySelectedDieFaceResources = (goldNuggetsQuantity: number,
                                             sunShardsQuantity: number,
                                             moonShardsQuantity: number,
                                             gloryPointsQuantity: number): void => {
        if (this.isDone) {
            throw new Error("Effects from this die have already been applied.");
        }
        this.hero.inventory.addGoldNuggets(this.multiplier * goldNuggetsQuantity);
        this.hero.inventory.addSunShards(this.multiplier * sunShardsQuantity);
        this.hero.inventory.addMoonShards(this.multiplier * moonShardsQuantity);
        this.hero.inventory.addGloryPoints(this.multiplier * gloryPointsQuantity);

        this.isDone = true;
        this.callbackFunction();
    };
}