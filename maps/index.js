const baseUrl = "https://maps.google.com/maps?q="
// let endPoint =document.getElementById("search-city").value
let endPoint ="nairobi"
let mapContainer =document.getElementById("map-container")
//
const header =new Headers()

async function getCityMap(){
    const response =await fetch(`${baseUrl}${endPoint}`,{
        method:"GET",
        headers: header
    })
    const data =await response.json()
    console.log(data)
    return data.map( (map)=>{
        mapContainer.innerHTML =`
            <iframe src="${map} " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    })
}
setTimeout(()=>{
    getCityMap().then(r => {console.log("fetched")})
},10000)

