let balance =0
let player ={
    name:"john",
    chip:100
}
let cards =[]
let isAlive=false
let hasBlackJack =false
let message =document.getElementById("message-el")
let cardsEl =document.getElementById("cards-el")
let sumEl =document.getElementById("sum-el")
let nameAndChips =document.getElementById("player-el")


function generateRandomCards(){
    let randomNumber =Math.floor(Math.random()*13)+1

    if(randomNumber >10){
        randomNumber =10
    }else if(randomNumber ===1){
        randomNumber =11
    }

    return randomNumber

}
function startGame(){
    if(isAlive===false){
        
        let firstCard =generateRandomCards()
        let secondCard =generateRandomCards()
        cards =[firstCard,secondCard]
        sum =firstCard+secondCard
        nameAndChips.innerText =`name: ${player.name}\nchips :$${player.chip}`
        renderGame()
        isAlive=true
        
    }
}
function newCard(){
    if(isAlive ===true &&hasBlackJack===false){
        let newCard =generateRandomCards()
        cards.push(newCard)
        sum +=newCard
        renderGame()

    }
}
function renderGame(){ 
    cardsEl.innerHTML ="cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.innerHTML +=cards[i]+" "
    }
    sumEl.textContent ="Sum: "+sum
    if(sum ===21){
        message.innerText ="you have a blackjack!"
        player.chip +=100
        hasBlackJack =true
        isAlive=false
    }else if(sum>21){
       message.innerText="you are out of the game"
       player.chip =0
       isAlive =false
    }else(
       message.innerText="wanna pick another card?"
    )
}
