// Dom
const btn =document.getElementById("btn-el")
const cont =document.getElementById("p-el")
btn.addEventListener("click",function(){
    par.innerHTML +=`
    <p>button clicked</p>

    `
})

// to do sth after sometime

setTimeout(function(){
    console.log("after 3 secs")
},3000)

// object destructuring
let PersonDetails ={
    firstName:"peter",
    secondName:"kkk",
    age:19
}
const { firstName,secondName,age } =PersonDetails
console.log(`${firstName} ${secondName}, ${age}`)

// change array to string
let nums =[1,2,3,4,5]
const stringified =JSON.stringify(nums)
console.log(stringified)

export const PI =3.14159


