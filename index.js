let firstCard = 10;
let secondCard = 6;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message="";
let mSg = document.getElementById("msg");
let sumC = document.getElementById("sumcard");
let card = document.getElementById("cards");

function start() {
    sumC.textContent = "Sum:" + " " + sum;
    card.textContent = "Cards:" + " " + firstCard + " " + secondCard;

    if (sum <= 21){
        message = "Do you want to draw a new card?";
        console.log("Do you want to draw a new card?");
        isAlive = true;
    }
    else if (sum === 21){
        message="Well done, you got blackjack!";
        console.log("Well done, you got blackjack!");
        hasBlackJack = true;
    }
    else{
        message="You are out of the game!";
        console.log("You are out of the game!");
        isAlive = false;
    }

    mSg.textContent = message;
    console.log("hello");
}

start();

function newcard() {
    console.log("hello");
}
newcard();
