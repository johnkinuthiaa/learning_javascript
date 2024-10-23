console.log("what is the capital city of kenya? ")
setTimeout(function(){
    console.log("Nairobi")
},3000)

setTimeout(function(){
    console.log("proceeding to the next question")
},6000)
// with a parameter
function displayTrafficLight(light){
    console.log(light)
}

setTimeout(displayTrafficLight, 3000, '🟢')

displayTrafficLight('🔴')
function logAnswer(answer,points) {
    console.log(`The answer is ${answer} of course! If you got that right, give yourself ${points} points.`)
}

console.log('What is the capital of Peru?')
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/

setTimeout(logAnswer,3000,"Lima",10)
const questionTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('Cancelling...')
})