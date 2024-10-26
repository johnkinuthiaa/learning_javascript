const date =new Date()
console.log(date.toString())
console.log(date.getFullYear())
console.log(date.getMinutes())

// console.log(date.getDate())
// const p =document.getElementById("p-el")
// let isAlive =true

    setTimeout(function(){
        console.log(date.toLocaleTimeString())
    },1000)


console.log(`copyright ${date.getFullYear()},All rights reserved`)