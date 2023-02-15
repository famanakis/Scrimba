import {blogData} from "./data.js"

//Variables to access DOM 
const blogMain = document.getElementById('blog-main-content')
const btnHamburger = document.getElementById('nav-hamburger')
const btnCloseModal = document.getElementById('btn-nav-modal')
const navModal = document.getElementById('nav-modal')


//Functions
function renderBlogMobile() {
    let html = ''
    blogData.forEach((blog, index)=>{
        if(index < 3) {
            (html += 
            `<div class="post" id="${blog.uuid}">
                <img src="${blog.image}" class="post-image" alt=""/>
                <p class="post-date">${blog.date}</p>
                <a class="post-title" href="./blogPages/${blog.keyword}.html">${blog.title}</a>
                <p class="post-text">${blog.summary}</p>
            </div>`)
        }
    })
    blogMain.innerHTML = html
}
renderBlogMobile()


//Event Listeners
btnHamburger.addEventListener('click', () => {
    navModal.style.display = 'flex'
})

btnCloseModal.addEventListener('click', () => {
    navModal.style.display = 'none'
})