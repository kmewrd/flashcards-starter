class Turn {
  constructor(card, guess) {
    this.currentCard = card;
    this.guess = guess;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    return this.guess === this.currentCard.correctAnswer;
  }
}

module.exports = Turn;
