var expect = chai.expect;

describe("CardGame.js", function(){
   describe("Player", function(){
       it("constructor", function(){
           const player = new Player("Richie");
            expect(player.player).to.equal("Richie");
            expect(Array.isArray(player.playerHand)).to.equal(true);
            expect(player.playerHand.length).to.equal(0);
            expect(player.points).to.equal(0);
       })
    
   })
   describe("Card", function(){
       const card = new Card("Seven", "Diamonds", 7);
       it("constructor", function(){
           expect(card.name).to.equal("Seven");
           expect(card.suit).to.equal("Diamonds");
           expect(card.value).to.equal(7);
       })
       it("description", function(){
           expect(card.description()).to.equal("Seven of Diamonds");
       })
   })
   describe("Deck", function(){
       const playerOne = new Player("Richie");
       const playerTwo = new Player("Rambo");
       const deck = new Deck(playerOne, playerTwo);
       it("Deck should be empty", function(){
           expect(deck.cards.length).to.equal(0);
       })
   }) 
});