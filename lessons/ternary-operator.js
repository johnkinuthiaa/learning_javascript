// used for executing shrthand if-else statement
const legalAge =18
const myAge =17

const votingMessage=(myAge>=legalAge)?"you can vote":"you cannot vote"

console.log(votingMessage)
// its if else equivalent
if(myAge>=legalAge){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}