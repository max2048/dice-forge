import {Component, Input} from '@angular/core';
import {RollHeroBothDiceStep} from "../../../model/steps/roll-hero-both-dice-step";

@Component({
    selector: 'roll-hero-both-dice-step',
    templateUrl: './roll-hero-both-dice-step.component.html',
    styleUrls: ['./roll-hero-both-dice-step.component.css']
})
export class RollHeroBothDiceStepComponent {

    @Input() step: RollHeroBothDiceStep;
}
