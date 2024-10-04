// todo :variable declaration
let myName ="john"
//this can be modified

const numberOfPeople =15
// cannot be modified

// logical operators
const isLearningJavaScriptFun = true
const didYouLie = true

if(isLearningJavaScriptFun && !didYouLie){
    console.log("javascript is fun")
}
else{
    console.log("you lied")
}

const a=100
const b=150

// ternary operators
const message =(a>b)?"a is greater than b":"b is greater than a"
console.log(message)