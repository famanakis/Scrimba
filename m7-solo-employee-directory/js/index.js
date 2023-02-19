import { employees } from "./employees.js"


//Access the DOM
const employeeCardDiv = document.getElementById('card-container')
const team = document.getElementById('input-select-team')
const searchInput = document.getElementById('input-search')

class Employee {
    constructor(data) {
        Object.assign(this, data)      
    }
    renderSocialIcons() {
        if (this.social.twitter && this.social.linkedin) {
                return `<a href="https://twitter.com/"><img src="images/assets/twitter-icon.png" alt="social link"></a>
                        <a href="https://www.linkedin.com/"><img src="images/assets/linkedIn-icon.png" alt="social link"></a>`
            } else if (this.social.twitter) {
                return `<a href="https://twitter.com/"><img src="images/assets/twitter-icon.png" alt="social link"></a>`
            } else {
                return `<a href="https://www.linkedin.com/"><img src="images/assets/linkedIn-icon.png" alt="social link"></a>`   
            } 
    }
    renderCardHtml() {
        const { name, title, bio, image} = this
        return   `<div class="card">
                    <img src="images/photos/${image}" class="employee-picture" alt="picture of jeremy">
                    <h2>${name}</h2>
                    <h3>${title}</h3>
                    <span class="bio">${bio}</span>
                    <span class="socials-div">${this.renderSocialIcons()}</span>   
                </div>`
    }
}

const employeeCards = employees.map((employees) => {
    const employeeCard = new Employee(employees)
    return employeeCard.renderCardHtml()
})

employeeCardDiv.innerHTML = employeeCards.join('')



//Event Listeners

team.addEventListener('change', (e) => {
    let filteredArr = employees.filter(function (team) {
        return team.team === e.target.value
    }).map((employees) => {
        const employeeCard = new Employee(employees)
        return employeeCard.renderCardHtml()
    })

    e.target.value === 'everyone' ? 
    employeeCardDiv.innerHTML = employeeCards.join('') : 
    employeeCardDiv.innerHTML = filteredArr.join('')

})