import popUpMessage from "../notification/popUp.js";
const usernameHolder =document.getElementById("username")
const passwordHolder =document.getElementById("password")
const emailHolder =document.getElementById("email")
const submitBtn =document.getElementById("submit-details")
const errorMessage =document.getElementById("error")


export default async function logIn(){
    try{
        const username =usernameHolder.value
        const email =emailHolder.value
        const password =passwordHolder.value
        const header =new Headers()
        header.append('Content-Type ',"application/json")
        const response =await fetch("http://localhost:8080/user/login",{
            method:"POST",
            body:JSON.stringify(
                {
                    username:`${username}`,
                    email:`${email}`,
                    password:`${password}`
                }),header
        })
        const data = await response
        if(response.ok){
            localStorage.setItem("jwtToken",`${data}`)
            window.location.href ="./bookStore/loggedIn.html"

        }else{
            errorMessage.innerHTML =popUpMessage()
        }

    }catch (e) {
        throw e;
    }


}
