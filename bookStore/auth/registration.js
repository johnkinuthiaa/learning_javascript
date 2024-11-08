// import {popUpMessage} from "../notification/popUp.js";
const usernameHolder = document.getElementById("username");
const passwordHolder = document.getElementById("password");
const emailHolder = document.getElementById("email");
const submitBtn = document.getElementById("submit-registration");
let errorMessage = document.getElementById("error");

const BASEURL ="http://localhost:8080/user"
async function register(username, email, password) {
    const myHeaders = new Headers();
    const role='USER'
    myHeaders.append('Content-Type', 'application/json');

    try{
        const response =await fetch(`${BASEURL}/register`,{
            method:"POST",
            body:JSON.stringify({
                username:`${username}`,
                email:`${email}`,
                password:`${password}`,
                role:`${role}`
            }),headers:myHeaders
        })
        if(!response.ok){
            errorMessage ="Error logging in!"
            throw Error("network error")
        }
        const data =await response.json()
        localStorage.setItem('role',`${role}`)
        window.location.replace("./login.html");
        console.log(data);

    }catch (e){
        console.log(e)
    }


}
submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const username =usernameHolder.value
    const email =emailHolder.value
    const password =passwordHolder.value
    if (!username || !email || !password) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    setTimeout(()=>{
        register(username,email,password).then( ()=>{
            console.log("logged in")
        })
    },2000)
})














