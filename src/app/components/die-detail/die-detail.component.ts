import {Component, Input} from '@angular/core';
import {Die} from "../../model/die";
import {DieFace} from "../../model/die-face";

@Component({
    selector: 'die-detail',
    templateUrl: './die-detail.component.html',
    styleUrls: ['./die-detail.component.css']
})
export class DieDetailComponent {

    @Input() die: Die;
    @Input() highlightTopFace: boolean = true;
    @Input() clickCallback: (dieFace: DieFace) => void;
}
