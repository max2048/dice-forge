import {Component, Input} from '@angular/core';
import {Game} from "../../model/game";

@Component({
    selector: 'round-detail',
    templateUrl: './round-detail.component.html',
    styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent {

    @Input() game: Game;
}
