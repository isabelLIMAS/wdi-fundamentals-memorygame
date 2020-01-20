
let cards = ["Queen","Queen","King","King"];
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
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}
flipCard(3);
flipCard(2);