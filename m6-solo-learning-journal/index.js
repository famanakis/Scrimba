import {blogData} from "./data.js"

//Variables to access DOM 
const mainContent = document.getElementById('home-main-content')
const btnHamburger = document.getElementById('nav-hamburger')
const btnCloseModal = document.getElementById('btn-nav-modal')
const navModal = document.getElementById('nav-modal')
const btnViewMore = document.getElementById('view-more')


//Functions 
function renderBlogLess() {
    let html = ''
    blogData.forEach((blog, index)=>{
        if(index < 6) {
            (html += 
            `<div class="post" id="${blog.uuid}">
                <img src="${blog.image}" class="post-image" alt=""/>
                <p class="post-date">${blog.date}</p>
                <a class="post-title" href="./blogPages/${blog.keyword}.html">${blog.title}</a>
                <p class="post-text">${blog.summary}</p>
            </div>`)
        }
    })
    mainContent.innerHTML = html
}
renderBlogLess()

function renderBlogAll() {
    let html = ''
    blogData.forEach((blog)=>{
            (html += 
            `<div class="post" id="${blog.uuid}">
                <img src="${blog.image}" class="post-image" alt=""/>
                <p class="post-date">${blog.date}</p>
                <a class="post-title" href="./blogPages/${blog.keyword}.html">${blog.title}</a>
                <p class="post-text">${blog.summary}</p>
            </div>`)
    })
    mainContent.innerHTML = html   
    btnViewMore.style.display = 'none' 
}

//Event Listeners
btnHamburger.addEventListener('click', () => {
    navModal.style.display = 'flex'
})

btnCloseModal.addEventListener('click', () => {
    navModal.style.display = 'none'
})

btnViewMore.addEventListener('click', renderBlogAll)