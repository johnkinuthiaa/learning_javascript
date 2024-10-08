
let count =0
function increment(){
    count =count+1
    document.getElementById('counter').innerHTML=count
}
function decrement(){
    count =count-1
    if(count<0){
        count=0
    }
    document.getElementById('counter').innerHTML=count
}
function save() {
    let saveEl =document.getElementById("people-recorded")
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}

function reset(){
    document.getElementById('counter').innerHTML=0
    count =0
    document.getElementById("people-recorded").innerHTML =" "
}
