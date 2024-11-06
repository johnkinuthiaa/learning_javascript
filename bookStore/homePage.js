import {books} from "./dataCard.js"
const submitBtn =document.getElementById("search-book-btn")
const profile =document.getElementById("profile-info");
let searchBar =document.getElementById("search")
let bookContainer =document.getElementById("book-container")

function getBooks(books) {
    // const response =await fetch("");
    // const data =await response.json()
    const results =books.map( (book)=>{
        const{ bookTitle,bookAuthor,yearOfPublication,publisher,imageUrl} =book
        console.log(book)
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
    getBooks(books)
    console.log("wwerhjkjhfdsdgn")
    // getBooks(bookInput).then(r => console.log("fetched"))
})