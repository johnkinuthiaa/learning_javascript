const baseUrl ="https://dog.ceo/api/breeds/image/random"


async function getImage(){
    const response = await fetch(`${baseUrl}`,{method:"GET"})
    const data =await response.json()
    console.log(data)

}
getImage()