const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);
    const round = new Round(deck);

    expect(round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should keep track of the current card', function() {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);
    const round = new Round(deck);

    expect(round.returnCurentCard()).to.equal(card1);
  });

  it('should keep track of turns', function() {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });
});
