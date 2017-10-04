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
    @Input() clickCallBack: (dieFace: DieFace) => void;

    get dieFaceImageFile() {
        return configuration.imageFolder + this.dieFace.imageFile;
    }

    public isCallBackActive = (): boolean => {
        return this.clickCallBack != null && !this.isDisabled();
    };

    public isDisabled = (): boolean => {
        return (this.disableIfCostAbove && this.dieFace.cost > this.disableIfCostAbove) || (this.disableIfSimilarTo && this.dieFace.isSimilarToAny(this.disableIfSimilarTo));
    };
}
