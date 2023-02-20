import { employees } from "./employees.js"

//Access the DOM
const employeeCardDiv = document.getElementById('card-container')
const team = document.getElementById('input-select-team')
const searchInput = document.getElementById('input-search')

//Employee Class (could have done import/export but js file fairly short)
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

//Functions
function searchByTeam(target) {
    searchInput.value = ''
    const filteredEmployees = employees.filter(emp => target === emp.team)
    !target || target === 'everyone' ?
    employeeCardDiv.innerHTML = employees.map(emp => new Employee(emp).renderCardHtml()).join('') :
    employeeCardDiv.innerHTML = filteredEmployees.map(emp => new Employee(emp).renderCardHtml()).join('')    
}

searchByTeam()

function searchByName(target) {
    team.value = 'everyone'
    const searchInput = target.toUpperCase()
    const searchResults = employees.filter(emp =>  emp.name.toUpperCase().includes(searchInput))
    employeeCardDiv.innerHTML = searchResults.map(emp => new Employee(emp).renderCardHtml()).join('')    
}

//Event Listeners
team.addEventListener('change', (e) => searchByTeam(e.target.value))

searchInput.addEventListener('keyup', (e) => searchByName(e.target.value))


