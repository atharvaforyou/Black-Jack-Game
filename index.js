let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let player = {
    name : "Atharva",
    chips : 200
    }

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips




function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "Cards: "
    for(let i=0 ; i<cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum <= 20){
        message = "Do you want to draw a new card? "
    }
    else if(sum === 21){
        message = "You've gotten a BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
} 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1){
        randomNumber = 11
        return randomNumber
    } else if(randomNumber > 10){
        randomNumber = 10
    }
    return randomNumber
}


