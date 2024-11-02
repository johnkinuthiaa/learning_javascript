import { contactsArr } from "./Data.js"
const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
let contactDisplay = document.getElementById('contact-display')


function searchContacts(inputName) {
    contactsArr.forEach( (contact)=>{
        const { name, email, phone } = contact
        let regex =new RegExp(inputName,'gi')
        const doesMatch = regex.test(name)
        const contactMatch =(doesMatch)?`
        <div class="contact-card">
            <p>${name}</p>
            <p>${email}</p>
            <p>${phone}</p>
        </div>
        `:''
        contactDisplay.innerHTML +=contactMatch

    })
}

patternSearchSubmit.addEventListener("click",()=>{
    const userInput =patternSearchInput.value
    contactDisplay.innerHTML =" "
    searchContacts(userInput)
})


