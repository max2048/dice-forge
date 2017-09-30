import {Component, OnInit} from '@angular/core';
import {Game} from "../model/game";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    game: Game;

    ngOnInit() {
        this.game = new Game(["Audrey", "Florian", "Dany"]);
    }
}
