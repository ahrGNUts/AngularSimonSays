import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.css']
})
export class GameButtonsComponent implements OnInit {
  rowOne = [ 'Green', 'Red' ];
  rowTwo = [ 'Yellow', 'Blue' ];
  score = 0;

  constructor() { }

  ngOnInit() {
  }

  gameButtonClicked($event) {
    console.log($event);
  }

}
