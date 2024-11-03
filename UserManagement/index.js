let container =document.getElementById("employees")
let getAllBtn =document.getElementById("get-all")

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
                <button type="submit" id="delete">Delete<img src="delete.svg" alt=""></button>
            </div>
        </div>
        `
    }).join("")
}



