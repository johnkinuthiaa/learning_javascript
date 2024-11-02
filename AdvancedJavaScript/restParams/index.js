/*
Challenge:
1. Add parameters.
2. Update the HTML template where you
   see **NAME**.
3. Return HTML template for each label.
*/



const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

function getLabelsHtml(text, sender, ...restEmployees) {
    return restEmployees.map( (employee) =>
        `<div class="label-card">
            <p>Dear ${employee.name}</p>
            <p>${text}</p>
            <p>Best wishes,</p>
            <p>${sender}</p>
        </div>`
    ).join(" ")
}

document.getElementById('labels-container').innerHTML = getLabelsHtml(text, sender, {name: 'Sally'}, {name: 'Mike'}, {name: 'Rob'}, {name: 'Harriet'})

