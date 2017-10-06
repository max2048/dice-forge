import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {Game} from "../../model/game";
import {HeroicFeat} from "../../model/heroic-feat";

@Component({
    selector: 'islands-detail',
    templateUrl: './islands-detail.component.html',
    styleUrls: ['./islands-detail.component.css']
})
export class IslandsDetailComponent {

    @Input() game: Game;
    @Input() clickCallback: (heroicFeat: HeroicFeat) => void;
    @Input() disableSlotIfSunShardCostAbove: number;
    @Input() disableSlotIfMoonShardCostAbove: number;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
