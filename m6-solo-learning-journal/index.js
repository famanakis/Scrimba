import {blogData} from "./data.js"

//Variables to access DOM 
const mainContent = document.getElementById('home-main-content')
const blogMain = document.getElementById('blog-main-content')
const aboutMainContent = document.getElementById('about-main-content')


//Functions 
function renderBlogHome() {
    let html = ''
    blogData.forEach((blog, index)=>{
        if(index < 6) {
            (html += 
            `<div class="post" id="${blog.uuid}">
                <img src="${blog.image}" class="post-image" alt=""/>
                <p class="post-date">${blog.date}</p>
                <h3 class="post-title">${blog.title}</h3>
                <p class="post-text">${blog.summary}</p>
            </div>`)
        }
    })
    mainContent.innerHTML = html
}
renderBlogHome()

//Event Listeners