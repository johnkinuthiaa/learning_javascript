import register from "../auth/registration.js";

// registration

const usernameHolder =document.getElementById("username")
const passwordHolder =document.getElementById("password")
const emailHolder =document.getElementById("email")

const submitBtn =document.getElementById("submit-details")

submitBtn.addEventListener("click",()=>{
    register()
    console.log("clicked")
})