// const exerciseTimeMins = 20

// let message = ''

// if (exerciseTimeMins < 30) {'You need to try harder
//     message = !'
// }
// else {
//     message = 'Doing good!'
// }

// console.log(message)

// const message = (exerciseTimeMins<30) ? "You need to try harder!" : "Doing good!"

// console.log(message)

const mess =(condition)?"do this":"do this"

const playerGuess = 7
const correctAnswer = 6

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message = (playerGuess === correctAnswer) ? 'exactly right!' : (playerGuess >correctAnswer)?" too high":"too low"

console.log(message)