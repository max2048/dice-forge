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
    @Input() disableIfCostAbove: number;
    @Input() disableIfSimilarTo: DieFace[];
    @Input() clickCallback: (dieFace: DieFace) => void;

    get dieFaceImageFile() {
        return configuration.imageFolder + this.dieFace.imageFile;
    }

    public isCallbackActive = (): boolean => {
        return this.clickCallback != null && !this.isDisabled();
    };

    public isDisabled = (): boolean => {
        return (this.disableIfCostAbove != null && this.dieFace.cost > this.disableIfCostAbove) || (this.disableIfSimilarTo != null && this.dieFace.isSimilarToAny(this.disableIfSimilarTo));
    };
}
