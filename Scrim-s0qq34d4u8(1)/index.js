import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"
import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"

function getPropertyHtml(properties =[placeholderPropertyObj]) {
    return properties.map((property) => {
        const {propertyLocation,image, priceGBP, comment, roomsM2} = property
        const sqRooms = roomsM2.reduce((total, currentValue) => {
            return total + currentValue
        }, 0)
        return `
             <section class="card">
                <img src="./images/${image}" alt="property image">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${sqRooms} m&sup2;</h3>
                </div>
            </section>
        `

    }).join("")




/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

        \`

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters


This is the HTML template 👇. Replace everything in UPPERCASE with property data.


*/
}


/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr )

