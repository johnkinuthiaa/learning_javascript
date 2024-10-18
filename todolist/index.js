let todoArray =[]
const todoContainer =document.getElementById("todo-container")
let inputValue = document.getElementById("input-new-todo")
let newTodoBtn =document.getElementById("add")


newTodoBtn.addEventListener("click",function(){
    createNewTodo()
    inputValue.value =" "
})

function createNewTodo(){
    let todo =inputValue.value;
    if(todo !=null &&todo !=" "){
        todoContainer.innerHTML +=
        `<div class="todo">
            <input type="checkbox" name="check-todo" id="check-todo">
            <p class="p">${todo}</p>
            <button type="submit" id="delete">Delete</button>
        </div>`
    }else{
        alert("todo cannot be empty")
    }

}





