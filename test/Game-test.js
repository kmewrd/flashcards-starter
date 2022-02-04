const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    const game = new Game();

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', () => {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.be.an('object');
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should be able to start', () => {
    const game = new Game();

    game.start();

    expect(game.currentRound.deck).to.equal(game.cards);
    expect(game.currentRound.turns).to.equal(0);
    expect(game.currentRound.incorrectGuesses).to.deep.equal([]);
  });
});
