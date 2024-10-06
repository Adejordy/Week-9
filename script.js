/*
Create an automated version of war:
-Deal 26 Cards to each Player from a Deck of 52 cards.
-Iterate through the turns where each Player plays a Card.
-The Player who played the higher card is awarded a point.
*Ties result in zero points for both Players.
- After all cards have been played, display the score and declare the winner.
Classes: Card, Deck, Player
-as well as what properties and methods they may include
*/
/**
 *
 *
 *
 */

/*
Create a card class
-rank, suit, value
*/
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

/*
Create deck class
-52 cards/ array [] -Done
-get card/ method -Done
-build deck/ method -Done
-give data/ rank, suit, value -Done
--iterate through/ create nested loop for suit and rank/ use push method -Done
-shuffle deck /randomize array -Done
 */
class Deck {
  constructor() {
    this.card = [];
    this.suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
    this.rank = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    this.value = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ];
  }
  createDeck() {
    for (let i = 0; i < this.rank.length; i++) {
      for (let j = 0; j < this.suit.length; j++) {
        this.card.push(new Card(this.rank[i], this.suit[j], this.value[j]));
      }
    }
  }
  shuffle() {
    if (this.card.length > 0) {
      const shuffledDeck = this.card.sort(() => Math.random() - 0.5);
      this.card = [...shuffledDeck];
    }
  }
}

/*
-Create player class 
-players name, player score, player deck
-get name, deck, score ***look into get
--look at set score, deck
*/

/**creat deal class
 * player and deck
 * start
 * create game
 * deal card to each player
 * --loop through the deck and check for value
 * --determine winner if else
 */
