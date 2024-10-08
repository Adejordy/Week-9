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

//Create a card class
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}
/*
Create deck class
-give data/ rank, suit 
-shuffle deck /randomize array
 */
class Deck {
  constructor() {
    this.cards = []; //array for the values of cards and to hold the cards
    const suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const rank = [
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
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //for loop to go through the suits and ranks and then push a new card
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(rank[j], suit[i], value[j]));
      }
    }
  }
  shuffle() {
    //Fisher-yates shuffle, I found while searching for formulas
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  deal() {
    return this.cards.pop(); //pop method to return the last removed element
  }
  get length() {
    //getter
    return this.cards.length; //return the lenght of the cards array
  }
}
/*
-Create player class 
-players name, player score
*/
class Player {
  constructor(player) {
    this.player = player;
    this.points = 0;
    this.hand = [];
  }
  cardPlayed() {
    return this.turn.shift(); //return removed element from turn array to play card
  }
  totalPoints(points) {
    return (this.points += points); //to add the total to determine points
  }
  get score() {
    //getter
    return this.points; //to call on this later to get the points
  }
}

/**create dealer class
 * players and deck
 * start
 * create game
 * deal card to each player
 * --loop through the deck and check for value
 * --determine winner if else
 */
class Dealer {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.dealCards();
  }
  dealCards() {
    while (this.deck.length > 0) {
      this.player1.hand.push(this.deck.deal());
      this.player2.hand.push(this.deck.deal());
    }
  }
  playTurn() {
    //if else to deterime the winner of the hand by rank and add 1 point
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();
    const rank1 = this.value(card1.rank);
    const rank2 = this.value(card2.rank);
    if (rank1 < rank2) {
      this.player1.totalPoints(1);
    } else if (rank1 < rank2);
    {
      this.player2.totalPoints(1);
    }
  }
  playGame() {
    while (this.player1.hand.length > 0 && this.player2.hand.lenght > 0) {
      this.playTurn();
    }
    this.showScore();
  }
  showScore() {
    //else if to determine who wins the game or if the game is a tie
    console.log(`${this.player1.name}: ${this.player1.score}`);
    console.log(`${this.player2.name}: ${this.player2.score}`);
    if (this.player1.score > this.player2.score) {
      console.log("Player 1 Wins the game!");
    } else if (this.player1.score < this.player2.score) {
      console.log("Player 2 Wins the game!");
    } else {
      console.log("Tie Game!");
    }
  }
}
const gameRounds = 26;

//Run the game
const dealer = new Dealer();
dealer.playGame();
