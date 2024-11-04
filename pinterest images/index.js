const searchBtn =document.getElementById("submit")
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let userInput = document.getElementById("search")
let containerElements =document.getElementById("container")

let page =1
async function getPins(value) {
    const response = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`;
    const data =await response.json()
    if (page === 1) {
        containerElements.innerHTML = "";
    }
    console.log(data)
}

searchBtn.addEventListener("click",()=>{
    containerElements =" "
    getPins(userInput.value).then(r => console.log("fetched"))
})
