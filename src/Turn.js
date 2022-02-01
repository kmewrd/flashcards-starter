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
}

module.exports = Turn;
