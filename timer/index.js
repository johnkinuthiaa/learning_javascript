let timeP =document.getElementById("time-el")

function showTime(){
    let date =new Date()
    timeP.innerHTML =date.toLocaleTimeString()

    setTimeout(showTime,1000)

}
showTime()
