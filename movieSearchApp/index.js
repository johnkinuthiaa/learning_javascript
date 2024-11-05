 const baseUrl ="http://www.omdbapi.com/?apikey=389ea027&"
 let search =document.getElementById("search");
 const searchBtn =document.getElementById("search-btn")

 function getRandomNumbers(){
    return Math.ceil(Math.random()*1000000)
 }
 // app.imdb.com2wex6aeu6a8q9e49k7sfvufd6rhh0n
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
         if(Type !==undefined && Type !=="episode" &&Poster !=="N/A"){
             container.innerHTML +=`
                <div class="card" id="card-item">
                    <img src="${Poster}" > 
                    <h3>${Title}</h3>
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





