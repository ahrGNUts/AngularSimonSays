import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gameRunning = false;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameRunning = true;
  }

}
