// import {popUpMessage} from "../notification/popUp.js";
const usernameHolder =document.getElementById("username")
const passwordHolder =document.getElementById("password")
const emailHolder =document.getElementById("email")
const newPassword =document.getElementById("new-password")

const submitBtn =document.getElementById("submit-registration")
let errorMessage =document.getElementById("error")
async function register(username,email,password){
    const myHeaders =new Headers()
    myHeaders.append('Content-Type', 'application/json')
    console.log(myHeaders)

    const response =await fetch("http://localhost:8080/user/register",{
        method:"POST",
        body:JSON.stringify({
            username:`${username}`,
            email:`${email}`,
            password:`${password}`
        }),headers: myHeaders
    })
    window.location.href ="/bookStore/login.html"
    localStorage.setItem("role","USER")
    localStorage.getItem("role")
    const data =await response.json()
    console.log(data)

}

submitBtn.addEventListener("click",()=>{
    const username =usernameHolder.value
    const email =emailHolder.value
    const password =passwordHolder.value


    register(username, email, password).then(r  =>console.log("submitted"))

})













// const response =true
// if(!response.ok){
//     errorMessage.innerHTML =`
//         <div class="pop-up">
//             <p><img src="" alt="error">Could not log you in!</p>
//         </div>
//         `
// }else{
//     window.location.href = 'https://www.google.com';
// }
