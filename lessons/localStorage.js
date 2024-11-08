localStorage.setItem("name","john") //like in dictionary or json
let myName =localStorage.getItem("name")
console.log(myName)

// to change array to a string
let arr =["er","err","err"]
arr =JSON.stringify(arr)

// change it back to array
arr =JSON.parse(arr)