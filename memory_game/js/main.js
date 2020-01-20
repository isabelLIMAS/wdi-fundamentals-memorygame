
let cards = ["Queen","Queen","King","King"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User Flipped " +cardOne);
console.log("User Flipped " +cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match");
	}
	else {
		alert("Sorry,Try Again!");
	}
}