import {Component, Input} from '@angular/core';
import {MakeOfferingToGodsStep} from "../../../model/steps/make-offering-to-gods-step";

@Component({
    selector: 'make-offering-to-gods-step',
    templateUrl: './make-offering-to-gods-step.component.html',
    styleUrls: ['./make-offering-to-gods-step.component.css']
})
export class MakeOfferingToGodsStepComponent {

    @Input() step: MakeOfferingToGodsStep;
}
