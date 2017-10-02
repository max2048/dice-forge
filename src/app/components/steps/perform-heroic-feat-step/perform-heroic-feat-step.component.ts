import {Component, Input} from '@angular/core';
import {PerformHeroicFeatStep} from "../../../model/steps/perform-heroic-feat-step";

@Component({
    selector: 'perform-heroic-feat-step',
    templateUrl: './perform-heroic-feat-step.component.html',
    styleUrls: ['./perform-heroic-feat-step.component.css']
})
export class PerformHeroicFeatStepComponent {

    @Input() step: PerformHeroicFeatStep;
}
