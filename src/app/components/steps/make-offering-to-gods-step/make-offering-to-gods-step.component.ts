import {Component, Input} from '@angular/core';
import {MakeOfferingToGodsStep} from "../../../model/steps/make-offering-to-gods-step";
import {DieFace} from "../../../model/die-face";

@Component({
    selector: 'make-offering-to-gods-step',
    templateUrl: './make-offering-to-gods-step.component.html',
    styleUrls: ['./make-offering-to-gods-step.component.css']
})
export class MakeOfferingToGodsStepComponent {

    @Input() step: MakeOfferingToGodsStep;

    newDieFaceClicked = (clickedDieFace: DieFace): void => {
        this.step.newDieFace = clickedDieFace;
    };

    oldDieFaceClicked = (clickedDieFace: DieFace): void => {
        this.step.oldDieFace = clickedDieFace;
        this.step.forgeFace();
    };
}
