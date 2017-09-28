import {Component, OnInit} from '@angular/core';
import {Game} from "../model/game";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    game: Game;

    constructor() {
    }

    ngOnInit() {
        this.newGame();
    }

    newGame() {
        this.game = new Game();
        this.game.addHero("Audrey");
        this.game.addHero("Florian");
        this.game.addHero("Dany");
    }

    startGame() {
        this.game.start();
    }

    playHeroTurn() {
        this.game.playHeroTurn();
    }

    endGame() {
        this.game = null;
    }
}
