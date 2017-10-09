import {Component, Input} from '@angular/core';
import {Game} from "../../model/game";
import {StepType} from "../../model/steps/step-type";

@Component({
    selector: 'round-detail',
    templateUrl: './round-detail.component.html',
    styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent {

    ExportedStepType= StepType;

    @Input() game: Game;

    getStepTypeLabel = (stepType: StepType): string => {
        switch (stepType) {
            case StepType.RECEIVE_DIVINE_BLESSINGS :
                return "Receive divine blessings";
            case StepType.CALL_FOR_REINFORCEMENTS :
                return "Call for reinforcements";
            case StepType.SELECT_ACTION_TO_PERFORM :
                return "Select an action to perform";
            case StepType.MAKE_OFFERING_TO_GODS :
                return "Make an offering to the Gods";
            case StepType.PERFORM_HEROIC_FEAT :
                return "Perform an heroic feat";
            case StepType.SELECT_EXTRA_ACTION_TO_PERFORM :
                return "Select an extra action to perform";
            case StepType.ROLL_HEROES_DICE :
                return "Some heroes roll their dice";
            case StepType.ROLL_HERO_BOTH_DICE :
                return "Roll dice";
            case StepType.ROLL_SINGLE_DIE :
                return "Roll a die";
            case StepType.APPLY_DIE_FACE_EFFECTS :
                return "Apply a die face effects";
            default:
                return "Unknown step";
        }
    };
}
