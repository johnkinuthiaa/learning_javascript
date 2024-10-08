
let homeScores =0
let guestScores =0
function addOneHome(){
    homeScores +=1
    document.getElementById("home-scores").innerHTML =homeScores
}
function addTwoHome(){
    homeScores +=2
    document.getElementById("home-scores").innerHTML =homeScores
}
function addTwoHome(){
    homeScores +=2
    document.getElementById("home-scores").innerHTML =homeScores
}
function addThreeHome(){
    homeScores +=3
    document.getElementById("home-scores").innerHTML =homeScores
}

function addOneGuest(){
    guestScores +=1
    document.getElementById("guest-score").innerHTML =guestScores
}
function addTwoGuest(){
    guestScores +=2
    document.getElementById("guest-score").innerHTML =guestScores
}
function addThreeGuest(){
    guestScores +=3
    document.getElementById("guest-score").innerHTML =guestScores
}


function restart(){
    if(homeScores>guestScores){
        document.getElementById("winner").innerHTML ="home wins"
    }else if(homeScores<guestScores){
        document.getElementById("winner").innerHTML ="Guest wins"
    }else if(homeScores===guestScores && guestScores !=0){
        document.getElementById("winner").innerHTML ="Its a tie"
    }
    homeScores=0
    guestScores =0
    document.getElementById("guest-score").innerHTML =guestScores
    document.getElementById("home-scores").innerHTML =homeScores

}