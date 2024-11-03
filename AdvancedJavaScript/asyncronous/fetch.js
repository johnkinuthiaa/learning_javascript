
// let container =document.getElementById("container")



fetch("http://localhost:8080/api/v1/admin/variants/delete/id?id=52",{
    method:"DELETE"
})
    .then(response =>response.json())
    .then(data =>console.log(data))














// fetch('http://localhost:8080/api/v1/admin/variants/get/name?name=audi')
//     .then(response =>response.json())
//     .then(data =>{
//         console.log(data)
//         data.forEach( (info)=>{
//             const {variantName,variantDescription,modelNumber,imgUrl} = info
//             container.innerHTML +=`
//            <div>
//                 <img src="${imgUrl}" alt="audi q9">
//                 <p>${variantName}</p>
//                 <p>${variantDescription}</p>
//                 <p>${modelNumber}</p>
//            </div>
//
// `
//         })
//     })


// async function getImage(){
//     const response =await fetch('http://localhost:8080/api/v1/admin/variants/get/name?name=audi')
//     const data =await response.json()
//     data.forEach( (info)=>{
//         const {variantName,variantDescription,modelNumber,imgUrl} = info
//         container.innerHTML +=`
//            <div>
//                 <img src="${imgUrl}" alt="audi q9">
//                 <p>${variantName}</p>
//                 <p>${variantDescription}</p>
//                 <p>${modelNumber}</p>
//            </div>
//
// `
//     })
//
// }
// getImage()
