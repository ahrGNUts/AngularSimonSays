import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gameRunning = this.gameService.isGameRunning();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  startGame() {
    this.gameRunning = true;
  }

}
