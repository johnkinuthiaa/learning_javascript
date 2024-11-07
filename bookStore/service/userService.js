import getAllBooks from "./getAllBooks.js";
import register from "../auth/registration.js";
import logOut from "../auth/logOut.js";
import logIn from "../auth/login.js";

const submitBtn =document.getElementById("submit-details")

submitBtn.addEventListener("click",()=>{
    register()
})