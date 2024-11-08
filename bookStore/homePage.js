
const submitBtn =document.getElementById("search-book-btn")
const profile =document.getElementById("profile-info");
let searchBar =document.getElementById("search")
let bookContainer =document.getElementById("book-container")

bookContainer.innerHTML =localStorage.getItem("jwtToken")
async function getBooks() {
    const myHeaders =new Headers()
    const jwt =localStorage.getItem("jwtToken")
    const role =localStorage.getItem("role")
    console.log(jwt)
    console.log(role)
    myHeaders.append('Authorization',`Bearer ${jwt}`)
    myHeaders.append('Content-Type', 'application/json');
    if(jwt !==null && role ==="ADMIN"){
        throw Error("user not found")
    }
    const response =await fetch("http://localhost:8080/adminuser/all/books",{
        method:"GET",
        headers: myHeaders
    });
    const data =await response.json()
    const results =data.map( (data)=>{
        const{ bookTitle,bookAuthor,yearOfPublication,publisher,imageUrl} =data
        console.log(data)
        return `
         <div class="card">
            <img src="${imageUrl}" alt="${bookTitle}">
            <div class="title-holder">
                 <h3>${bookTitle}</h3>
                 <p>${bookAuthor}</p>
                 <p>${yearOfPublication}</p>
                 <p>${publisher}</p>
            </div>
        </div>
        `
    }).join(" ")
    bookContainer.innerHTML +=results
}

submitBtn.addEventListener("click",()=>{
    // let bookInput =searchBar.value
    getBooks().then(r => {
        console.log("wwerhjkjhfdsdgn")
    })

    // getBooks(bookInput).then(r => console.log("fetched"))
})