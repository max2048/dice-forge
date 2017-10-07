import {Component, Input} from '@angular/core';
import {CallForReinforcementsStep} from "../../../model/steps/call-for-reinforcements-step";
import {configuration} from "../../../app.config";

@Component({
    selector: 'call-for-reinforcements-step',
    templateUrl: './call-for-reinforcements-step.component.html',
    styleUrls: ['./call-for-reinforcements-step.component.css']
})
export class CallForReinforcementsStepComponent {

    @Input() step: CallForReinforcementsStep;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
