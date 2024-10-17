const rock =document.getElementById("rock")
const paper =document.getElementById("paper")
const scissors =document.getElementById("scissors")
const myChoices =["rock","paper","scissors"]
let results =document.getElementById("results-el")
let points =document.getElementById("points-el")
let userChoice =" "
let compGuess=" "
let score =0
let isAlive =false
function renderGame(){
    rock.addEventListener("click",function(){
        results.innerHTML =""
        userChoice ="rock"
        compGuess = generateRandomNumber()
        console.log(compGuess)
        let fromArr =myChoices[compGuess]
        console.log(fromArr)
        if(userChoice ===fromArr){
            results.textContent +="its a tie please play again"
            score +=5
            points.textContent =score
        }
        else if(fromArr==="paper"){
            results.innerHTML ="comp chose paper,paper beats rock!!you lose"
            score -=5
            points.textContent =score
            isAlive=false
        }else{
            results.innerHTML ="comp chose scissors,rock beats scissors!!you win"
            score +=5
            points.textContent =score
        }
    
    })
    paper.addEventListener("click",function(){
        results.innerHTML =""
        userChoice ="paper"
        compGuess = generateRandomNumber()
        console.log(compGuess)
        let fromArr =myChoices[compGuess]
        console.log(fromArr)
        if(userChoice ===fromArr){
            results.innerHTML ="its a tie please play again"
            score +=5
            points.textContent =score
        }
        else if(fromArr==="scissors"){
            results.innerHTML ="comp chose scissors,scissors beat paper!!you lose"
            score +=5
            points.textContent =score
            isAlive=false
        }
        else{
            results.innerHTML ="comp chose Rock,paper beats rock!!you win"
            score +=5
            points.textContent =score
        }
    })
    scissors.addEventListener("click",function(){
        results.innerHTML =""
        userChoice ="scissors"
        compGuess = generateRandomNumber()
        console.log(compGuess)
        let fromArr =myChoices[compGuess]
        console.log(fromArr)
        if(userChoice ===fromArr){
            results.innerHTML ="its a tie please play again"
            score +=5
            points.textContent =score
        }
        else if(fromArr==="paper"){
            results.innerHTML ="comp chose paper,scissors beat paper!!you win"
            score +=5
            points.textContent =score
        }
        else{
            results.innerHTML ="comp chose rock,rock beats scissors!!you lose"
            score +=5
            points.textContent =score
            isAlive=false
        }
    })
}

function generateRandomNumber(){
    let randomNumber =Math.floor(Math.random()*3)
    return randomNumber
}
function startGame(){
    if(isAlive===false){
        isAlive =true
        renderGame()

    }
}