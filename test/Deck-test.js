const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of Card objects', () => {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);

    expect(deck.cards).to.equal(allCards);
  });

  it('should know how many Cards are in the Deck', () => {
    const card1 = new Card(1, 'Which of the following is an array iterator method?', ['push()', 'concat()', 'reduce()', 'splice()'], 'reduce()');
    const card2 = new Card(2, 'What is the minimum number of arguments that a reducer callback function requires?', [1, 3, 2, 4], 2);
    const card3 = new Card(3, 'What does the map() iterator method return?', ['an array that is a different length from the calling array', 'an array that is the same length as the calling array', 'a single value that results from running a callback function over the array', 'nothing'], 'an array that is the same length as the calling array');

    const allCards = [card1, card2, card3];

    const deck = new Deck(allCards);

    expect(deck.countCards()).to.equal(3);
  });
});
