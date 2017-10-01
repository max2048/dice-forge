import {Component, Input} from '@angular/core';
import {Game} from "../../../model/game";
import {RollSingleDieStep} from "../../../model/steps/roll-single-die-step";

@Component({
    selector: 'roll-single-die-step',
    templateUrl: './roll-single-die-step.component.html',
    styleUrls: ['./roll-single-die-step.component.css']
})
export class RollSingleDieStepComponent {

    @Input() game: Game;
    @Input() step: RollSingleDieStep;
}
