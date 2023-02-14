import {blogData} from "./data.js"

//Variables to access DOM 
const aboutMainContent = document.getElementById('about-main-content')


//Functions 
function renderBlogAbout() {
    let html = ''
    blogData.forEach((blog, index)=>{
        if(index < 3) {
            (html += 
            `<div class="post" id="${blog.uuid}">
                <img src="${blog.image}" class="post-image" alt=""/>
                <p class="post-date">${blog.date}</p>
                <h3 class="post-title">${blog.title}</h3>
                <p class="post-text">${blog.summary}</p>
            </div>`)
        }
    })
    aboutMainContent.innerHTML = html
}
renderBlogAbout()

//Event Listeners