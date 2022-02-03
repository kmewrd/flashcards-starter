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
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.changeCardInPlay();
    return this.turn.giveFeedback();
  }
  changeCardInPlay() {
    for (var i = 0; i < this.deck.length; i++) {
      if (this.currentCard.id === i + 1) {
        return this.currentCard = this.deck[i + 1];
      }
    }
  }
  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length)/(this.turns)) * 100;
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
