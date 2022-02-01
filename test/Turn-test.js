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
});
