let numberOfStudents =30;
numberOfStudents++

console.log(`The number of students is ${numberOfStudents}!`)

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
let imageContainer =document.getElementById("container")
function renderImages(){
    for(let i=0;i<imgs.length;i++){
        imageContainer.innerHTML +=`
         <img class="team-img" src="${imgs[i]}">
        `
    }
    
}
renderImages()