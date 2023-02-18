import { employees } from "./employees.js"


//Access the DOM
const employeeCardDiv = document.getElementById('card-container')
const category = document.getElementById('input-select-category')
const searchInput = document.getElementById('input-search')


class Employee {
    constructor(data) {
        Object.assign(this, data)
        
    }

    // renderTwitter() {
    //     if(this.social.twitter) {`<a href="https://twitter.com/"><img src="images/assets/twitter-icon.png" alt="social link"></a>`}
    //     if(this.social.linkedin) {`<a href="https://www.linkedin.com/"><img src="images/assets/linkedIn-icon.png" alt="social link"></a>`}
    // }



    renderCardHtml() {
        const { name, title, team, bio, image, social} = this
        return   `<div class="card">
                    <img src="images/photos/${image}" class="employee-picture" alt="picture of jeremy">
                    <h2>${name}</h2>
                    <h3>${title}</h3>
                    ${bio}
                    <span class="socials-div">
                       
                    </span>   
                </div>`
    }

}

const employeeCard = new Employee(employees[1])
employeeCardDiv.innerHTML = employeeCard.renderCardHtml()

// console.log(employeeCard.socialLinks())

/* <div class="card">
    <img src="images/photos/jeremy.jpg" class="employee-picture" alt="picture of jeremy">
    <h2>Jeremy Durant</h2>
    <h3>CEO</h3>
    <p>Jeremy developed an interest in computers at an early age. He graduated with a computer science and electrical engineering degree.</p>
    <p>He was an early founder of successful companies like BlueSpace, Eazybit, and Drifty.</p>
    <img src="images/assets/linkedIn-icon.png" alt="social link">
</div>  */







