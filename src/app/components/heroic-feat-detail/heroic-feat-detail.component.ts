import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {HeroicFeat} from "../../model/heroic-feat";

@Component({
    selector: 'heroic-feat-detail',
    templateUrl: './heroic-feat-detail.component.html',
    styleUrls: ['./heroic-feat-detail.component.css']
})
export class HeroicFeatDetailComponent {

    @Input() heroicFeat: HeroicFeat;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
