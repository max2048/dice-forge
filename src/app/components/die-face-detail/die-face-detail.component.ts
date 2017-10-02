import {Component, Input} from '@angular/core';
import {DieFace} from "../../model/die-face";
import {configuration} from "../../app.config";

@Component({
    selector: 'die-face-detail',
    templateUrl: './die-face-detail.component.html',
    styleUrls: ['./die-face-detail.component.css']
})
export class DieFaceDetailComponent {

    @Input() dieFace: DieFace;

    get dieFaceImageFile() {
        return configuration.imageFolder + this.dieFace.imageFile;
    }
}
