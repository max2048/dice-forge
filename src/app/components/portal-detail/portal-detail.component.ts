import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {Portal} from "../../model/portal";
import {HeroicFeat} from "../../model/heroic-feat";

@Component({
    selector: 'portal-detail',
    templateUrl: './portal-detail.component.html',
    styleUrls: ['./portal-detail.component.css']
})
export class PortalDetailComponent {

    @Input() portal: Portal;
    @Input() clickCallback: (heroicFeat: HeroicFeat) => void;

    get imageFolder() {
        return configuration.imageFolder;
    }
}
