import {Component, Input} from '@angular/core';
import {RollAllHeroesDiceStep} from "../../../model/steps/roll-all-heroes-dice-step";

@Component({
    selector: 'roll-all-heroes-dice-step',
    templateUrl: './roll-all-heroes-dice-step.component.html',
    styleUrls: ['./roll-all-heroes-dice-step.component.css']
})
export class RollAllHeroesDiceStepComponent {

    @Input() step: RollAllHeroesDiceStep;

    public getCssClass = (): string => {
        switch (this.step.game.heroes.length) {
            case 2:
                return "col-md-6";
            case 3:
                return "col-md-4";
            default:
                return "col-md-3";
        }
    };
}
