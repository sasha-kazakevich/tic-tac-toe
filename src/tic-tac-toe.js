class TicTacToe {
    constructor() {
      this.game = [[null,null,null],
                   [null,null,null],
                   [null,null,null]];
      this.playerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.playerSymbol ;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.game[rowIndex][columnIndex]) {
        this.game[rowIndex][columnIndex] = this.playerSymbol;
        this.playerSymbol = (this.playerSymbol === 'x') ? 'o' : 'x';
      }

      return this;
    }

    isFinished() {
      if (this.getWinner() || this.noMoreTurns()) return true;
      return false;
    }


    getWinner() {
      for (let i = 0; i < 3; i++) {
        if (this.game[0][i] === this.game[1][i] && this.game[1][i] === this.game[2][i]){
          return this.game[0][i];
        }
        if (this.game[i][0] === this.game[i][1] && this.game[i][1] === this.game[i][2]){
          return this.game[i][0];
        }
      }

      if (this.game[0][0] === this.game[1][1] && this.game[1][1] === this.game[2][2] ||
          this.game[0][2] === this.game[1][1] && this.game[1][1] === this.game[2][0]) {
          return this.game[1][1];
        }

      return null;
    }

    noMoreTurns() {
     return this.game.every(function(row){
      return row.every(function(col){
        return col;
        });
      });
    }

    isDraw() {
      if (this.noMoreTurns() && !this.getWinner()) {
        return true;
      }
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.game[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
