import {Component, Input} from '@angular/core';
import {ReceiveDivineBlessingsStep} from "../../../model/steps/receive-divine-blessings-step";

@Component({
    selector: 'receive-divine-blessings-step',
    templateUrl: './receive-divine-blessings-step.component.html',
    styleUrls: ['./receive-divine-blessings-step.component.css']
})
export class ReceiveDivineBlessingsStepComponent {

    @Input() step: ReceiveDivineBlessingsStep;
}
