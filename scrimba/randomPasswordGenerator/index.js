const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive =false

let password1 = document.getElementById("password-el")
let password2=document.getElementById("password-ell")
function generateRandomNumber(){
    let randomNumber =Math.floor(Math.random()*characters.length)
    return randomNumber
}
function generatePass(){
    if(isAlive ===false){
        for(let i=0;i<16;i++){
            password1.innerHTML +=characters[generateRandomNumber()]
            password2.innerHTML +=characters[generateRandomNumber()]
        }
        isAlive =true

    }
    else{
        password1.innerHTML =" "
        password2.innerHTML =" "
        generateNewPassword()
    }
}
function generateNewPassword(){
    for(let i=0;i<16;i++){
        password1.innerHTML +=characters[generateRandomNumber()]
        password2.innerHTML +=characters[generateRandomNumber()]
    }
}