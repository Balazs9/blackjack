let firstCard = 10;
let secondCard = 6;

let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true;
let message="";
let mSg = document.getElementById("msg");
let sumC = document.getElementById("sumcard");
let card = document.getElementById("cards");

function start() {
    play();
}

function play() {
    sumC.textContent = "Sum:" + " " + sum;
    card.textContent = "Cards:" + " " + cards[0] + " " + cards[1];

    if (sum <= 21){
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21){
        message="Well done, you got blackjack!";
        hasBlackJack = true;
    }
    else{
        message="You are out of the game!";
        isAlive = false;
    }

    mSg.textContent = message;
    
}

function newcard() {
    let thirdCard = 3;
    sum += thirdCard;
    cards.push(thirdCard)
    play();
    
}
