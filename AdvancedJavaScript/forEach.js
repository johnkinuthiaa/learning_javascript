const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]
//for each loop

characters.forEach((character)=>{
    const {title} =character
    console.log(`title: ${title}`)
})

for(let character of characters){
    const {title} =character
    console.log(`title: ${title}`)
}
const titles =characters.map( (character)=>{
    const {title} =character
    return title
} )
console.log(`title: ${titles}`)

//comparison between the looping methods