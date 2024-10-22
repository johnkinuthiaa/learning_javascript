/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
    let price = 0
    
    switch(item) {
        case 'coffee':
        price = 2
        break    
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('biscuits'))