export default async function getAllBooks(token){
    try{
        const response =await fetch('http://localhost:8080/user/all/books',{
            headers:{
                "Authorization":`Bearer${token}`
            }
        })
        const data =await response.json()
        if(response.ok){
            return data
        }

    }catch (Error){
        throw Error
    }
}
