const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to take in the current card in play', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card);

    expect(turn.currentCard).to.be.an.instanceOf(Card);
    expect(turn.currentCard.correctAnswer).to.equal('stoat');
  });

  it('should be able to take in a string representing the user\'s guess', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.guess).to.equal('stoat');
  });

  it('should return the guess', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.returnGuess()).to.equal('stoat');
  });

  it('should return the card', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');


    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', () => {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');
    const card2 = new Card(2, 'How many legs does a dog have?', [2, 3, 4], 4);
    const turn2 = new Turn(card2, 3);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
