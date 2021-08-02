
// Instructions: In Visual Studio Code, or an IDE of your choice, write the code 
// that accomplishes the objectives listed below. Ensure that the code compiles 
// and runs as directed. Take screenshots of the code and of the running program 
// (make sure to get screenshots of all required functionality) and paste them in 
// this document where instructed below. Create a new repository on GitHub for 
// this week’s assignments and push this document, with your JavaScript project 
// code, to the repository. Add the URL for this week’s repository to this document 
// where instructed and submit this document to your instructor when complete.
// Coding Steps:
// For the final project you will be creating an automated version of the classic card game WAR.
// Think about how you would build this project and write your plan down. Consider classes such 
// as Card, Deck, and Player and what fields and methods they might each have. You can implement 
// the game however you’d like (i.e. printing to the console, using alert, or some other way). 
// The completed project should, when ran, do the following:
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// o	Ties result in zero points for either Player
// -	After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

class Player {
    constructor(player) {
        this.player = player;
        this.playerHand = [];
        this.points = 0;
    }
}

class Card {

    static names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Jack", "Queen", "King"];
    static suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    static values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    constructor(name, suit, value) {
        // value 2 through 14, suits 0 through 3 -- represent as numbers to make comparisons easier
        this.name = name;
        this.suit = suit;
        this.value = value;

    }

    description() {
        return Card.names[this.name - 1] + " of " + Card.suits[this.suit];
    }
}

class Deck {
    constructor(playerOne, playerTwo) {
        this.cards = [];
        this.playerOne = playerOne
        this.playerTwo = playerTwo

        this.createDeck()
        this.shuffleDeck()
        this.dealDeck()
    }

    // Create an outside for loop that loops through suits array, nest another for loop
    // inside that loops through card values
    createDeck() {
        for (let i = 0; i < Card.suits.length; i++) {
            for (let x = 0; x < Card.names.length; x++) {
                const name = Card.names[x];
                const suit = Card.suits[i];
                const value = Card.values[x];
                this.cards.push(new Card(name, suit, value));
            }
        } return this.cards;

    }

    // Randomize order of cards using Math.random/Math.floor
    shuffleDeck() {
        let shuffledCards = this.cards;

        for (let i = 0; i < shuffledCards.length - 1; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = shuffledCards[i];
            shuffledCards[i] = shuffledCards[j];
            shuffledCards[j] = temp;
        }
        return this.cards;
    }

    dealDeck() {
        for (let i = 0; i < 52; i += 2) {
            let dealP1 = this.cards.shift();
            let dealP2 = this.cards.shift();
            this.playerOne.playerHand.push(dealP1);
            this.playerTwo.playerHand.push(dealP2);
        }
    }
}


class GamePlay {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.playGame()
    }

    eachRound() {
        for (let i = 0; i < 26; i++) {
            let firstPlayerCard = this.playerOne.playerHand.shift();
            let secondPlayerCard = this.playerTwo.playerHand.shift();
            console.log(`${this.playerOne.player} played the ${firstPlayerCard.name} of ${firstPlayerCard.suit} and ${this.playerTwo.player} played the ${secondPlayerCard.name} of ${secondPlayerCard.suit}.`);
            if (firstPlayerCard.value > secondPlayerCard.value) {
                this.playerOne.points += 1;
                console.log(`${this.playerOne.player} wins this round!`);
            } else if (firstPlayerCard.value < secondPlayerCard.value) {
                this.playerTwo.points += 1;
                console.log(`${this.playerTwo.player} wins this round!`);
            } else {
                console.log("This round was a draw!");
            }
        }
    }
    determineWinner() {
        let firstPlayerScore = this.playerOne.points;
        let secondPlayerScore = this.playerTwo.points;
        console.log(`The final scores are ${this.playerOne.player} has a total of ${firstPlayerScore} points and ${this.playerTwo.player} has a total of ${secondPlayerScore} points!`);
        if (this.playerOne.points > this.playerTwo.points) {
            console.log(`${this.playerOne.player} HAS WON THE WAR!!`);
        } else if (this.playerOne.points < this.playerTwo.points) {
            console.log(`${this.playerTwo.player} HAS WON THE WAR!!`);
        } else {
            console.log(`STALEMATE.`);
        }
    }

    playGame() {
        this.eachRound();
        this.determineWinner();
    }
}


// Set up the players
let richie = new Player("Richie");
let rambo = new Player("Rambo");

// Set up the deck
let deck = new Deck(richie, rambo)

// Set up the GamePlay
game = new GamePlay(richie, rambo)

