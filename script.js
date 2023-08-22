let player = {
	name: "Akshay",
	chips: 171
}
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
	let randomNo = Math.floor( Math.random()*13) + 1;
	if(randomNo > 10)
		return 10;
	else if(randomNo === 1)
		return 11;
	else
		return randomNo;
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	sum = firstCard + secondCard
	cards = [firstCard, secondCard]
	renderGame();
}

function renderGame() {
	if(sum <= 20) {
	message = "Do you want to draw another card?";
	}
	else if(sum === 21) {
		message = "You have got a BlackJack!";
		hasBlackJack = true;
	}
	else {
		message = "You're out of the game";
		isAlive = false;
	}
	let displaySum = "Sum: " + sum;
	messageEl.textContent = message;
	sumEl.textContent = displaySum;
	cardEl.textContent = "Cards: ";
	for(let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " ";
	}
}

function newCard() {

	if(isAlive === true && hasBlackJack === false)
	{
		let card = getRandomCard()
		sum += card;
		cards.push(card);
		renderGame();
	}
}

// startGame();