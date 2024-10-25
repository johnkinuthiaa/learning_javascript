// extracting variables  from objects
const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 
//  TODO:dONT DO THIS
// const title =favouriteFilm.title
// const year =favouriteFilm.year
// const genre =favouriteFilm.genre
// const star =favouriteFilm.star
// const director =favouriteFilm.star
// TODO: Do this instead

const{ title,year,genre,star,director} =favouriteFilm


console.log(`my favourite movie is ${title}
    it's release year is ${year}
    it's genre is ${genre} 
    the star of the movie is ${star}
    and the director is ${director}
    `)

    const dreamHoliday = {
        destination: 'mautirius',
        activity: 'chilling at the beach',
        accommodation: 'hill side',
        companion: 'Angela'
    }
    const { destination,activity,accommodation,companion } =dreamHoliday

    

// set timeout
setTimeout(function(){
    console.log(`my dream destination this holiday is ${destination},
        i just want to ${activity} after the long work season and i'll sleep at ${accommodation}.
        i will be accompanied by ${companion}(a must) and we'll have fun together.`)
},3000)
console.log("before")
setTimeout(function(){
    console.log("after")
},4000)