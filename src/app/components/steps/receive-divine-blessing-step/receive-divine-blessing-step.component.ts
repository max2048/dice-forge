import {Component, Input} from '@angular/core';
import {ReceiveDivineBlessingStep} from "../../../model/steps/receive-divine-blessing-step";

@Component({
    selector: 'receive-divine-blessing-step',
    templateUrl: './receive-divine-blessing-step.component.html',
    styleUrls: ['./receive-divine-blessing-step.component.css']
})
export class ReceiveDivineBlessingStepComponent {

    @Input() step: ReceiveDivineBlessingStep;
}
