
function calculateBill(){
    let billInput =document.getElementById("amount").value
    let tipInput =document.getElementById("tip-percentage").value
    let totalBill =billInput*1+(tipInput/100*billInput)
    let total =document.getElementById("total-bill")
    total.innerText ="$"+totalBill
}