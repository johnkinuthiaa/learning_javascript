// mostly used for searches
const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]
// get shows in atl
// const loc =series.filter(function(show){
//     return show.location ==="Atlanta"
//
// })
// console.log(loc)
// get shows which are thrillers
const thrillers =series.filter(function(show){
    return show.genres.includes("thriller")
})

console.log(thrillers)

const nerds = series.filter(function(show){
    return show.genres.includes("nerd")
})
console.log(nerds)