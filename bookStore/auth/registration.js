import popUpMessage from "../notification/popUp.js";


let errorMessage =document.getElementById("error")
const newPassword =document.getElementById("new-password")

export default async function register(){
    console.log("clicked")
    const username =usernameHolder.value
    const email =emailHolder.value
    const password =passwordHolder.value
    const headers =new Headers()
    headers.append('Content-Type', 'application/json')
    const response =await fetch("http://localhost:8080/user/register",{
        method:"POST",

        body:JSON.stringify({
            username:`${username}`,
            email:`${email}`,
            password:`${password}`
        }),headers
    })
    console.log(response)
    const data = await response
    if(!response.ok){
        errorMessage.innerHTML =popUpMessage();
    }else{
        window.location.href = 'https://www.google.com';
    }
    return data;
}
