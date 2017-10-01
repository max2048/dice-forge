import {Component, Input} from '@angular/core';
import {RollAllHeroesDiceStep} from "../../../model/steps/roll-all-heroes-dice-step";

@Component({
    selector: 'roll-all-heroes-dice-step',
    templateUrl: './roll-all-heroes-dice-step.component.html',
    styleUrls: ['./roll-all-heroes-dice-step.component.css']
})
export class RollAllHeroesDiceStepComponent {

    @Input() step: RollAllHeroesDiceStep;
}
