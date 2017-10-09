import {Component, Input} from '@angular/core';
import {Hf04Step} from "../../../../model/steps/heroic-feats/hf04-step";

@Component({
    selector: 'hf04-step',
    templateUrl: './hf04-step.component.html',
    styleUrls: ['./hf04-step.component.css']
})
export class Hf04StepComponent {

    @Input() step: Hf04Step;
}
