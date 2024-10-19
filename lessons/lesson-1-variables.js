// declare variables-use const for constants and let for mutable variables
let firstName ='john'
const lastName ='kinuthia'

console.log(firstName)

firstName +='kinuthia'

console.log(firstName)

// reasigning variables

let count =10
count =count +3
console.log(count)

count =count-5
console.log(count)

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ parseInt(totalPrice).toFixed(2) }`


