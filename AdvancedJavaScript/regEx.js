const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

/*
Challenge:
    1. Use replaceAll and regex to ensure the first
       character of each sentence is uppercase.
       You will need to use a string method which converts
       characters to uppercase.
*/
const upperCaseParagraph = paragraph.replace(/(?:^|\.\s)([A-Za-z])/g,function(match){
    return match.toUpperCase()
})

// TODO: flags-they give instructions to the regex
// i =case insensitive=
// g=global...check all the words

console.log(upperCaseParagraph)

const text = "Please switch off the WiFi before you leave."

const regex = /wifi/i

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)

// const text = "Please switch off the WIFI before you leave."
// const userInput = "wifi"
//
// const regex = new RegExp(userInput, 'g')
//
// const doMatch = regex.test(text) //boolean
//
// console.log(doMatch)