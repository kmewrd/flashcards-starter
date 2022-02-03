const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turn = new Turn(this.currentCard, guess);
    this.turns++;
    for (var i = 0; i < this.deck.length; i++) {
      if (this.currentCard.id === i + 1) {
        return this.currentCard = this.deck[i + 1];
      }
    };
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
  }
}

module.exports = Round;
