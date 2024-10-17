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