// store data in key value pairs--left side is variable name(key ) while the right side is the value of the key

// let player ={
//     name:"john",
//     age :19
// }
// console.log(player.age)

// you can also store an array in the object
// let houseListing ={
//     name:"king arcade",
//     location:"rongai",
//     pics:["https:ertgfertg.png","https:ertgfertg.png"]
// }

// console.log(houseListing.pics)
let pElement =document.getElementById("p-el")
let PersonDetails ={
    firstName:"peter",
    secondName:"kkk",
    age:19
}
pElement.textContent +=PersonDetails.firstName.concat(" "+PersonDetails.age)
console.log(PersonDetails.secondName)
console.log(PersonDetails.age)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
const scoreBtn =document.getElementById("get-scores")
let scoreEl=document.getElementById("scores")
scoreBtn.addEventListener("click",function(){
    let janeScore =data[0].score
    scoreEl.textContent =janeScore
})