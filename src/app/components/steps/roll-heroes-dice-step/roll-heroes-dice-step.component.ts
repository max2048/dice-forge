import {Component, Input} from '@angular/core';
import {RollHeroesBothDiceStep} from "../../../model/steps/roll-heroes-dice-step";

@Component({
    selector: 'roll-heroes-dice-step',
    templateUrl: './roll-heroes-dice-step.component.html',
    styleUrls: ['./roll-heroes-dice-step.component.css']
})
export class RollHeroesDiceStepComponent {

    @Input() step: RollHeroesBothDiceStep;

    public getCssClass = (): string => {
        switch (this.step.heroes.length) {
            case 2:
                return "col-md-6";
            case 3:
                return "col-md-4";
            default:
                return "col-md-3";
        }
    };
}
