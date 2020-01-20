
let cards = [
	{rank : "Queen", 
	suit : "hearts",
	cardImage: "images/queen-of-hearts.png",
},
	{rank : "Queen", 
	suit : "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
	{rank : "King", 
	suit : "hearts",
	cardImage: "images/King-of-hearts.png",
},
	{rank : "King", 
	suit : "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("you found a match");
		}
		else {
			console.log("Sorry,Try Again!");
		}
}
function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}
flipCard(0)
flipCard(2)

