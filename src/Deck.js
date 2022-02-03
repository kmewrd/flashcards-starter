class Deck {
  constructor(cards) {
    this.cards = cards;
    this.numberOfCards = this.cards.length;
  }
  countCards() {
    return this.numberOfCards;
  }
}

module.exports = Deck;
