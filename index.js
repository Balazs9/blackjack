
let sum = 0;
let cards = []
let hasBlackJack = false;
let isAlive = false;
let message="";
let mSg = document.getElementById("msg");
let sumC = document.getElementById("sumcard");
let card = document.getElementById("cards");

// let addName = prompt("Please enter your name");

function getPlayer() {
    
}

let player = {
    name : " ",
    chips : 0
}


let playerName = document.getElementById("playername");
playerName.textContent = player.name + ": $" + player.chips;

function getRandomcard() {
    let number = Math.floor(Math.random() * 13) + 1;
    /*
    if (number == 1){
        return 11
    }
    else if (11 <= number && number <= 13){
        return 10
    }
    else {
    return number;

    }
   */
    if (number > 10){
        return 10
    }
    else if (number===1){
        return 11
    }
    else{
        return number
    }
    
    //return number;
}

function start() {
    isAlive = true;
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    play();
}

function play() {
    sumC.textContent = "Sum:" + " " + sum;
    card.textContent = "Cards: ";
    for (let x=0; x<cards.length; x++){
        card.textContent += cards[x] + " ";
    }

    if (sum < 21){
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
    if (isAlive === true && hasBlackJack === false){

        let thirdCard = getRandomcard();
        sum += thirdCard;
        cards.push(thirdCard)
        play();
    }
    
}
