const container =document.getElementById("container")
container.innerHTML +="<button id='buy-btn'>Buy now</button>"

// to handle clicks get hold of button element

const buyBtn =document.getElementById("buy-btn")
buyBtn.addEventListener("click",function(){
    container.innerHTML +="<p> Thanks for buying</p>"
})
// alt
// create element
// add text
// append

const createdButton =document.createElement("button")
createdButton.textContent +="Buy Now"
container.append(createdButton)

const createParagraph =document.getElementById("el")

createParagraph.innerHTML =`<p class="p-el">
This is ${buyBtn} insane
</p>`

