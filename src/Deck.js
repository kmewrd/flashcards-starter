class Deck {
  constructor(cards) {
    this.cards = cards || [];
    this.numberOfCards = this.cards.length || 0;
  }
}

module.exports = Deck;
