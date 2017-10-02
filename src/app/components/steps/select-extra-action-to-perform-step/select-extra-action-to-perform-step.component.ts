import {Component, Input} from '@angular/core';
import {SelectExtraActionToPerformStep} from "../../../model/steps/select-extra-action-to-perform-step";

@Component({
    selector: 'select-extra-action-to-perform-step',
    templateUrl: './select-extra-action-to-perform-step.component.html',
    styleUrls: ['./select-extra-action-to-perform-step.component.css']
})
export class SelectExtraActionToPerformStepComponent {

    @Input() step: SelectExtraActionToPerformStep;
}
