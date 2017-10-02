import {Component, Input} from '@angular/core';
import {SelectActionToPerformStep} from "../../../model/steps/select-action-to-perform-step";

@Component({
    selector: 'select-action-to-perform-step',
    templateUrl: './select-action-to-perform-step.component.html',
    styleUrls: ['./select-action-to-perform-step.component.css']
})
export class SelectActionToPerformStepComponent {

    @Input() step: SelectActionToPerformStep;
}
