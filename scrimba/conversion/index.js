let inputVal =document.getElementById("unit")
const convertBtn =document.getElementById("convert")
let conversionDiv =document.getElementById("conversions")
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/

convertBtn.addEventListener("click",function(){
    conversionDiv.innerHTML =" "
    convert()
})
function convertToFeet(value){
    let toFeet =(value*3.281)
    return Math.round(toFeet*10000)/10000
}
function convertToGallons(value){
    let toGallons =(value*0.264)
    return Math.round(toGallons*10000)/10000
}
function convertToPounds(value){
    let toPounds =(value*2.204)
    return Math.round(toPounds*10000)/10000
}
function convertToMeters(value){
    let toMeters =(value/3.281)
    return Math.round(toMeters*10000)/10000
}
function convertToLitres(value){
    let toLitres =(value*0.264)
    return Math.round(toLitres*10000)/10000
}
function convertToKgs(value){
    let toKgs =(value*2.204)
    return Math.round(toKgs*10000)/10000
}
function convert(){
    let val =inputVal.value*1
    let metres =convertToMeters(val)
    let feet =convertToFeet(val)

    let gallons =convertToGallons(val)
    let litres =convertToLitres(val)

    let pounds =convertToPounds(val)
    let kilograms =convertToKgs(val)


    conversionDiv.innerHTML +=`
    <div class="unit-holder">
        <h3>Length(Metre/Feet)</h3>
        <p>${val} metres = ${feet} feet| ${val} feet =${metres} meters</p>
    </div>
    <div class="unit-holder">
        <h3>Volume(Litres/Gallons)</h3>
        <p>${val} Litres = ${gallons} gallons| ${val} Gallons =${litres} Litres</p>
    </div>
    <div class="unit-holder">
        <h3>Mass(Kilograms/Pounds)</h3>
        <p>${val} Kilograms = ${pounds} pounds| ${val} Pounds =${kilograms} Kilograms</p>
    </div>`


}
