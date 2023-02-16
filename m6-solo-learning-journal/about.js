import {blogData} from "./blogData.js"

//Variables to access DOM 
const aboutMainContent = document.getElementById('about-main-content')
const btnHamburger = document.getElementById('nav-hamburger')
const btnCloseModal = document.getElementById('btn-nav-modal')
const navModal = document.getElementById('nav-modal')

//Functions 
function renderBlogAbout() {
    aboutMainContent.innerHTML = blogData.slice(0, 3).map(blog => 
        `<div class="post" id="${blog.uuid}">
            <img src="${blog.image}" class="post-image" alt=""/>
            <p class="post-date">${blog.date}</p>
            <a class="post-title" href="./blogPages/${blog.keyword}.html">${blog.title}</a>
            <p class="post-text">${blog.summary}</p>
        </div>`).join('')
}
renderBlogAbout()

//Event Listeners
btnHamburger.addEventListener('click', () => {
    navModal.style.display = 'flex'
})

btnCloseModal.addEventListener('click', () => {
    navModal.style.display = 'none'
})