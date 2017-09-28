import {Component, Input, OnInit} from '@angular/core';
import {Die} from "../../model/die";

@Component({
    selector: 'die-detail',
    templateUrl: './die-detail.component.html',
    styleUrls: ['./die-detail.component.css']
})
export class DieDetailComponent implements OnInit {

    @Input() die: Die;

    constructor() {
    }

    ngOnInit() {
    }
}
