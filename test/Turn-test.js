const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function(){
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to take in the current card in play', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card);

    expect(turn.currentCard).to.be.an.instanceOf(Card);
    expect(turn.currentCard.correctAnswer).to.equal('stoat');
  });

  it('should be able to take in a string representing the user\'s guess', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.guess).to.equal('stoat');
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.returnGuess()).to.equal('stoat');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');


    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', function() {
    const card = new Card(1, 'What is Kim\'s favorite animal?', ['penguin', 'armadillo', 'stoat', 'tardigrade'], 'stoat');
    const turn = new Turn(card, 'stoat');

    const card2 = new Card(2, 'How many legs does a dog have?', [2, 3, 4], 4);
    const turn2 = new Turn(card2, 3);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
