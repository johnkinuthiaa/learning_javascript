const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const convertedToKms =distanceWalkedMilesArr.map(function(kilometers){
    return kilometers*conversionFactorMilesToKm;
})
console.log(convertedToKms)

