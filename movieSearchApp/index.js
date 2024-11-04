 const baseUrl ="http://www.omdbapi.com/?apikey=389ea027&"
 let search =document.getElementById("search");
 const searchBtn =document.getElementById("search-btn")

 function getRandomNumbers(){
    return Math.ceil(Math.random()*1000000)
 }
let container =document.getElementById("container")
 let endPoint =`tt9${getRandomNumbers()}`

 async function getHomePageMovies(movieInput=endPoint){

    const response =await fetch(`${baseUrl}${movieInput}`)
     const data =await response.json()
     console.log(movieInput)
     const movies =data.Search
     console.log(typeof (movies))
     console.log(movies)
     return movies.map( (movie)=> {
         const{ Title,Year,Type,Poster	} =movie
         if(Type !==undefined && Type !=="episode"){
             container.innerHTML +=`
                <div class="card" id="card-item">
                    <img src="${Poster}" > 
                    <p>${Title}</p>
                    <p>Year:${Year}</p>
                    <p>Type:${Type}</p>
                </div>
         `
         }
     })
 }

 searchBtn.addEventListener("click",()=>{
     container.innerHTML =" "
     getHomePageMovies(`s=${search.value}`).then(r => {console.log("fetched")})
 })





