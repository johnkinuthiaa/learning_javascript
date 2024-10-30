import {playlistArr as tracks} from "./tracks.js"

const container =document.getElementById("container")

// let tracksArray =[]
const tracksMap =tracks.map(function(track){
    const{ albumArt,title,artist} =track

    return `
        <section class="card">
            <div class="card-start">
                <img src="https://i.pinimg.com/${albumArt}.jpg">
            </div>
            <div class="card-mid">
                <h4 class="card-title">${title}</h4>
                <p class="card-artist">${artist}</p>
            </div>
            <div class="card-end">
                <p class="card-menu">...</p>
            </div>
        </section>
`
}).join("")
container.innerHTML +=tracksMap
