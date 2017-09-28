import {Component, Input, OnInit} from '@angular/core';
import {DieFace} from "../../model/die-face";
import {configuration} from "../../app.config";

@Component({
    selector: 'die-face-detail',
    templateUrl: './die-face-detail.component.html',
    styleUrls: ['./die-face-detail.component.css']
})
export class DieFaceDetailComponent implements OnInit {

    @Input() dieFace: DieFace;

    constructor() {
    }

    ngOnInit() {
    }

    get dieFaceImageFile() {
        return configuration.imageFolder + this.dieFace.imageFile;
    }
}
