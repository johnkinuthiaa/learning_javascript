const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}

//refactor

const getSpendAlertArrow =(amount)=>{
    return `Warning! You just spent £${amount}!`
}
console.log(getSpendAlertArrow(14))

function speedWarning(speed){
    return `You are going at ${speed} mph!`
}



const speedAlert = speed => `You are going at ${speed} mph!`
console.log(speedAlert(40))

const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm =distanceTraveledMiles.map( kilometres=>{
    return Math.round(kilometres*1.6)
})
console.log(distanceTraveledKm)