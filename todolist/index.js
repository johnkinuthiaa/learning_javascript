// <ul id="list"></ul>
// <label htmlFor="item-input">Item</label>
// <input type="text" id="item-input" placeholder="e.g. rice"/>
// <button id="add-item-btn">Add</button>

let list =document.getElementById("list")
let inputItem =document.getElementById("item-input")
const addBtn =document.getElementById("add-item-btn")

let myTodoArray=[]

addBtn.addEventListener("click",function(){
    if(inputItem.value !==""){
        myTodoArray.push(inputItem.value)
        list.innerHTML =""
        inputItem.value =""
        render()
    }else{
        onmessageerror("error")
    }


})
function render(){

    let html =""
    for(let item of myTodoArray){
        html += `
        <div>
            <li class="list-item">${item}</li>
        </div>`

    }
    list.innerHTML +=html

}







