
function getTodo(){
    let inputValue = document.getElementById("input-new-todo").value
    let newTodo =document.createElement("checkbox")
    let pContent =document.createTextNode(" "+inputValue)
    newTodo.appendChild(pContent)
    const element = document.getElementById("new-todo");
    element.appendChild(newTodo);

}



