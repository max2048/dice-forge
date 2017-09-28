import {Component, Input, OnInit} from '@angular/core';
import {Inventory} from "../model/inventory";

@Component({
    selector: 'resource-detail',
    templateUrl: './resource-detail.component.html',
    styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

    @Input() inventory: Inventory;
    @Input() resourceType: string;
    resources: Array<string> = [];
    imagesPath: string = "assets/img/";

    constructor() {
    }

    ngOnInit() {
        switch (this.resourceType) {
            case "gold-nugget":
                for (let i = 0; i < this.inventory.getActualGoldNuggetsLimit(); i++) {
                    this.resources.push( this.imagesPath + (i < this.inventory.goldNuggets - 1 ? this.resourceType : "empty-resource") + ".png");
                }
                break;
            case "sun-shard":
                for (let i = 0; i < this.inventory.getActualSunShardsLimit(); i++) {
                    this.resources.push( this.imagesPath + (i < this.inventory.sunShards - 1 ? this.resourceType : "empty-resource") + ".png");
                }
                break;
            case "moon-shard":
                for (let i = 0; i < this.inventory.getActualMoonShardsLimit(); i++) {
                    this.resources.push( this.imagesPath + (i < this.inventory.moonShards - 1 ? this.resourceType : "empty-resource") + ".png");
                }
                break;
        }
    }
}