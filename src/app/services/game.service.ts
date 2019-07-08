export class GameService {
  static readonly buttonNames = [
    'btnGreen',
    'btnRed',
    'btnYellow',
    'btnBlue'
  ];
  private gameRunning = false;
  private currentQueue = [];
  private score = 0;
  private playerTurn = false;

  isGameRunning() {
    return this.gameRunning;
  }

  getScore() {
    return this.score;
  }

  isPlayerTurn() {
    return this.playerTurn;
  }

  startGame() {
    if (!this.gameRunning) {
      this.gameRunning = true;
      // TODO: game logic
    }
  }
}
