const usernameHolder =document.getElementById("username")
const passwordHolder =document.getElementById("password")
const emailHolder =document.getElementById("email")
const submitBtn =document.getElementById("submit-details")
const errorMessage =document.getElementById("error")


async function logIn(username,email,password){
    try{
        const myHeaders =new Headers()
        myHeaders.append('Content-Type', 'application/json');
        const response =await fetch("http://localhost:8080/user/login",{
            method:"POST",
            body:JSON.stringify(
                {
                    username:`${username}`,
                    email:`${email}`,
                    password:`${password}`
                }),headers:myHeaders
        })
        const data = await response.json()
        console.log(data)
        if(response.ok){
            localStorage.setItem("jwtToken",`${data}`)
            console.log(localStorage.getItem("jwtToken"))
            setTimeout( ()=>{
                window.location.replace("./loggedIn.html");
            },2000)
        }else{
            errorMessage.innerHTML ="wrong Email or password"
        }

    }catch (e) {
        console.log( e);
    }
}
submitBtn.addEventListener("click",(event)=>{
    const username =usernameHolder.value
    const email =emailHolder.value
    const password =passwordHolder.value
    event.preventDefault()
    console.log("clicked");
    setTimeout( ()=>{
        logIn(username,email,password).then( ()=>{
            console.log("logged in")
        })
    },5000)
})
