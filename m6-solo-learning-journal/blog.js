import {blogData} from "./data.js"

//Variables to access DOM 
const blogMain = document.getElementById('blog-main-content')


//Functions
function renderBlogMobile() {
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
    blogMain.innerHTML = html
}
renderBlogMobile()


//Event Listeners