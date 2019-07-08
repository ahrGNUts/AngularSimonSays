import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.css']
})
export class GameButtonsComponent implements OnInit, AfterContentInit {
  rowOne = [ 'Green', 'Red' ];
  rowTwo = [ 'Yellow', 'Blue' ];
  score = this.gameService.getScore();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.gameService.startGame();
  }

  gameButtonClicked($event) {
    if (this.gameService.isGameRunning()){
      // TODO: game logic
    }
  }

}
