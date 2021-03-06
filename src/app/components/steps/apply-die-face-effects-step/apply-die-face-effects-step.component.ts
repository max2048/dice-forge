import {Component, Input} from '@angular/core';
import {ApplyDieFaceEffectsStep} from "../../../model/steps/apply-die-face-effects-step";
import {configuration} from "../../../app.config";

@Component({
    selector: 'apply-die-face-effects-step',
    templateUrl: './apply-die-face-effects-step.component.html',
    styleUrls: ['./apply-die-face-effects-step.component.css']
})
export class ApplyDieFaceEffectsStepComponent {

    @Input() step: ApplyDieFaceEffectsStep;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
