function calculate(){
    let weightInKilograms =document.getElementById("kgs-el").value
    let weightInPounds =weightInKilograms*1 /0.453592
    let result =document.getElementById("weight-info")
    result.innerHTML +=`${weightInPounds} pounds`
}