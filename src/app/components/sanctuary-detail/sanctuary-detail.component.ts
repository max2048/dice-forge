import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {Sanctuary} from "../../model/sanctuary";

@Component({
    selector: 'sanctuary-detail',
    templateUrl: './sanctuary-detail.component.html',
    styleUrls: ['./sanctuary-detail.component.css']
})
export class SanctuaryDetailComponent {

    @Input() sanctuary: Sanctuary;
    @Input() budget: number;

    constructor() {
    }

    get imageFolder() {
        return configuration.imageFolder;
    }
}
