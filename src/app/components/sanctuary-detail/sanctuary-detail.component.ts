import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {Sanctuary} from "../../model/sanctuary";
import {DieFace} from "../../model/die-face";

@Component({
    selector: 'sanctuary-detail',
    templateUrl: './sanctuary-detail.component.html',
    styleUrls: ['./sanctuary-detail.component.css']
})
export class SanctuaryDetailComponent {

    @Input() sanctuary: Sanctuary;
    @Input() budget: number;
    @Input() clickCallback: (dieFace: DieFace) => void;

    constructor() {
    }

    get imageFolder() {
        return configuration.imageFolder;
    }
}
