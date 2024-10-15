const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers =[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password-el")
let password2=document.getElementById("password-ell")



function generateRandomNumber(input){
    let randomNumber =Math.floor(Math.random()*input.length)
    return randomNumber
}

function generatePass(){
    password1.innerHTML =""
    password2.innerHTML =""
    generateNewPassword()
    }
function generateNewPassword(){
    let lengthOfPassword =document.getElementById("pass-length")
    
    length =lengthOfPassword.value
    if(length ==="" ||length<3){
        length =15
    }
    let passwordFilter =document.getElementById("select")
    let passwordFormat =passwordFilter.value
    if(passwordFormat ==="1"){
        for(let i=0;i<length;i++){
            password1.innerHTML +=characters[generateRandomNumber(characters)]
            password2.innerHTML +=characters[generateRandomNumber(characters)]
        }
    }else if(passwordFormat==="2"){
        for(let i=0;i<length;i++){
            password1.innerHTML +=letters[generateRandomNumber(letters)]
            password2.innerHTML +=letters[generateRandomNumber(letters)]
        }
    }else if(passwordFormat==="3"){
        let lettersAndNumbers =letters.concat(numbers)
        for(let i=0;i<length;i++){
            password1.innerHTML +=lettersAndNumbers[generateRandomNumber(lettersAndNumbers)]
            password2.innerHTML +=lettersAndNumbers[generateRandomNumber(lettersAndNumbers)]
        }
    }else if(passwordFormat==="4"){
        let lettersAndSymbols =letters.concat(symbols)
        for(let i=0;i<length;i++){
            password1.innerHTML +=lettersAndSymbols[generateRandomNumber(lettersAndSymbols)]
            password2.innerHTML +=lettersAndSymbols[generateRandomNumber(lettersAndSymbols)]
        }
    }
}
