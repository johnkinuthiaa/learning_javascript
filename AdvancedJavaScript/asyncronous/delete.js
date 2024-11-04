const headers =new Headers()
headers.append("Content-Type","application/json")

const response =await fetch("http://localhost:8080",{
    method:"POST",
    body:JSON.stringify(
        {

        }
    )
    ,headers})