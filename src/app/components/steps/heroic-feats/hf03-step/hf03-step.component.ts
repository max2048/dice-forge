import {Component, Input} from '@angular/core';
import {Hf03Step} from "../../../../model/steps/heroic-feats/hf03-step";
import {configuration} from "../../../../app.config";

@Component({
    selector: 'hf03-step',
    templateUrl: './hf03-step.component.html',
    styleUrls: ['./hf03-step.component.css']
})
export class Hf03StepComponent {

    @Input() step: Hf03Step;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
