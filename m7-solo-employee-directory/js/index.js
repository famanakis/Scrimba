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

//Functions
function renderEmpCards(target) {
    const filteredEmployees = employees.filter(emp => target === emp.team)
    !target || target === 'everyone' ?
    employeeCardDiv.innerHTML = employees.map(emp => new Employee(emp).renderCardHtml()).join('') :
    employeeCardDiv.innerHTML = filteredEmployees.map(emp => new Employee(emp).renderCardHtml()).join('')    
}

renderEmpCards()

function renderEmpCardsByName(target) {
        const searchInput = target.toUpperCase()
        
        // const empNames = document.getElementsByTagName('h2')
        // const empNames = employees.map(i => {
            // if(i.name.toUpperCase().includes(searchInput))
            // return i.name.toUpperCase()
            // return i.name
        // })

        // console.log(empNames)

        

        // for( let i = 0; i < empNames.length; i ++) {

            // let names = empNames[i].innerHTML.toUpperCase()
            // console.log(names)
            // console.log(names.includes(searchInput))
            // names.includes(searchInput) ? console.log(names) : ''
            // if(names.includes(searchInput)) {
                // console.log(names)
                // const searchedEmp = employees.filter(emp => names === emp.name.toUpperCase())
                // console.log(searchedEmp)
                // console.log(searchedEmp.map(emp => new Employee(emp).renderCardHtml()).join(''))
                // employeeCardDiv.innerHTML = searchedEmp.map(emp => new Employee(emp).renderCardHtml()).join('')
                
                // employeeCardDiv.innerHTML = employees.map(emp => new Employee(emp).renderCardHtml()).join('')
            //     // employeeCardDiv.innerHTML =  searchedEmp.map(emp => new Employee(emp).renderCardHtml()).join('')
            // } else {
                // employeeCardDiv.innerHTML = ''
            // }
        // }

}

//Event Listeners
team.addEventListener('change', (e) => renderEmpCards(e.target.value))

searchInput.addEventListener('keyup', (e) => {
    team.value = 'everyone'
    renderEmpCardsByName(e.target.value)
    }
)


