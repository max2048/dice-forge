import {Component, Input} from '@angular/core';
import {configuration} from "../../app.config";
import {HeroicFeat} from "../../model/heroic-feat";
import {Slot} from "../../model/slot";

@Component({
    selector: 'slot-detail',
    templateUrl: './slot-detail.component.html',
    styleUrls: ['./slot-detail.component.css']
})
export class SlotDetailComponent {

    @Input() slot: Slot;
    @Input() clickCallback: (heroicFeat: HeroicFeat) => void;
    @Input() disableIfSunShardCostAbove: number;
    @Input() disableIfMoonShardCostAbove: number;

    get imageFolder() {
        return configuration.imageFolder;
    }

    public isCallbackActive = (): boolean => {
        return this.clickCallback != null && !this.isDisabled();
    };

    public isDisabled = (): boolean => {
        return (this.disableIfSunShardCostAbove != null && this.slot.sunShardsCost > this.disableIfSunShardCostAbove) || (this.disableIfMoonShardCostAbove != null && this.slot.moonShardsCost > this.disableIfMoonShardCostAbove);
    };
}
