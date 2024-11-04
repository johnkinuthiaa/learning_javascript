let container =document.getElementById("employees")
let getAllBtn =document.getElementById("get-all")
const searchBtn =document.getElementById("search-btn")
let searchBox =document.getElementById("search")
const addNewBtn =document.getElementById("add-new")


async function getByEmail(email) {
    const response = await fetch(`http://localhost:8080/api/v1/users/get/email?email=${email}`)
    const data = await response.json()
    return data.map((result) => {
        const {firstName, lastName, email, role} = result
        console.log(result)
        container.innerHTML += `
        <div class="card">
            <p>${firstName}</p>
            <p>${lastName}</p>
            <p>${email}</p>
            <p>${role}</p>
            <div class="button-container">
                <button type="submit" id="edit">Edit  </button>
                <button type="submit" id="delete" onclick="deleteItem()">Delete<img src="delete.svg" alt=""></button>   
            </div>
        </div>
        `

    }).join("")
}

searchBtn.addEventListener("click",()=>{
    container.innerHTML =" "

    getByEmail(searchBox.value)
})
getAllBtn.addEventListener("click",()=>{
    container.innerHTML =" "
    getAllBtn.innerHTML ="Loading..."
    setTimeout(()=>{
        getEmployee()
        getAllBtn.innerHTML ="Get All employees"
    },1000)

})


async function getEmployee(){
    const response =await fetch("http://localhost:8080/api/v1/users/get/all",{method:"GET"})
    const data =await response.json()
    return data.map((empInfo) => {
        const {firstName, lastName, email, role} = empInfo
        container.innerHTML += `
        <div class="card">
            <p>${firstName}</p>
            <p>${lastName}</p>
            <p>${email}</p>
            <p>${role}</p>
            <div class="button-container">
                <button type="submit" id="edit">Edit  </button>
                <button type="submit" id="delete" onclick="deleteItem()">Delete<img src="delete.svg" alt=""></button>   
            </div>
        </div>
        `

        }).join("")

}
async function addUser() {
    container.innerHTML +=`
    <form id="add-new-user-form">
        <label for="firstname">FirstName:</label>
        <input type="text" id="firstname">
        <label for="" id="lastname">LastName: </label>
        <input type="text">
        <label for="" id="email">Email:</label>
        <input type="text">
        <label for="" id="role">Role</label>
        <input type="text">
        <button type="button" id="submit-form">save</button>
    </form>
    
    `
    const firstname =document.getElementById("firstname").value
    const lastname =document.getElementById("lastname").value
    const emails =document.getElementById("email").value
    const roles =document.getElementById("role").value
    const submitBtn =document.getElementById("submit-form")
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    submitBtn.addEventListener("click",async () => {
        const response =await fetch("http://localhost:8080/api/v1/users/save/user",{
            method:"POST",
            body:JSON.stringify({
                firstName:`${firstname}`,
                lastName:`${lastname}`,
                email:`${emails}`,
                role:`${roles}`
            }),headers: myHeaders
        })
        const data =await response.json()
        return data.map((resp)=>{
            const {firstName, lastName, email, role} = resp
            container.innerHTML += `
                <div class="card">
                    <p>${firstName}</p>
                    <p>${lastName}</p>
                    <p>${email}</p>
                    <p>${role}</p>
                    <div class="button-container">
                        <button type="submit" id="edit">Edit  </button>
                        <button type="submit" id="delete" onclick="deleteItem()">Delete<img src="delete.svg" alt=""></button>   
                    </div>
                </div>
        `

        }).join("")
    })


}

addNewBtn.addEventListener( "click",()=>{
    container.innerHTML =" "
    addUser()
})



