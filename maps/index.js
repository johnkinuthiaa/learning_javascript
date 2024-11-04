const baseUrl = "https://www.google.com/maps/place/Nairobi"
// let endPoint =document.getElementById("search-city").value

let mapContainer =document.getElementById("map-container")
// //
// const header =new Headers()

// async function getCityMap(){
//     const response =await fetch(`${baseUrl}${endPoint}`,{
//         method:"GET",
//         headers: header
//     })
//     const data =await response.json()
//     console.log(data)

// }

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
fetch(`${baseUrl}`,{
    mode: 'no-cors',
    headers:myHeaders
    })
    .then(response =>response.json())
    .then(data =>{
        console.log(data)
        mapContainer.innerHTML +=`
           <iframe src="${data} " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `

        })

//     .then(data =>{
//         console.log(data)
    if(!response.ok){
        throw Error()
    }

