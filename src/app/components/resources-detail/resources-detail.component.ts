import {Component, Input, OnInit} from '@angular/core';
import {Inventory} from "../../model/inventory";
import {configuration} from "../../app.config";

@Component({
    selector: 'resources-detail',
    templateUrl: './resources-detail.component.html',
    styleUrls: ['./resources-detail.component.css']
})
export class ResourcesDetailComponent implements OnInit {

    @Input() inventory: Inventory;

    constructor() {
    }

    ngOnInit() {
    }

    get imageFolder() {
        return configuration.imageFolder;
    }
}