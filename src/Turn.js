class Turn {
  constructor(card, guess) {
    this.currentCard = card;
    this.guess = guess;
  }
  returnGuess() {
    return this.guess;
  }
}

module.exports = Turn;
