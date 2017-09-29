import {Component, Input} from '@angular/core';
import {Hero} from "../../model/hero";
import {configuration} from "../../app.config";

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

    @Input() heroes: Hero[];

    get imageFolder() {
        return configuration.imageFolder;
    }
}
