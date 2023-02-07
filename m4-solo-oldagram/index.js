//Dom Variables
const postContainerEl = document.getElementById("post-container")

//Object Data Set
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

//Functions
renderPosts()

function renderPosts() {
    let html = ''

    for (let i = 0; i < posts.length; i++) { 
        html += `
            <section class="title-section">
                <div>
                    <img class="avatar post-avatar" src="${posts[i].avatar}">
                </div>
                <div>
                    <p class="bold">${posts[i].name}</p>
                    <p class="smaller-text">${posts[i].location}</p>
                </div>
            </section>
            <section class="post-image">
                <img id="main-post" class="main-post" src="${posts[i].post}">
            </section>
            <section class="post-info">
                <div class="icon-div">
                    <button class="btn" onClick="addLikesToPage(${i})">
                    <i id="${posts[i].username}" class="fa-regular fa-heart"></i></button>
                    <button class="btn"><img class="comment" src="images/icon-comment.png"></button>
                    <button class="btn"><img class="dm" src="images/icon-dm.png"></button>
                </div>
                <div>
                <p class="bold likes"><span id="currentLikes">${posts[i].likes}</span> likes</p>
                <p><span class="bold likesBtn">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>`

            
    }
    postContainerEl.innerHTML = html   
}

//function to add likes to user - 
    // Increase by one if isLikes is false, decrease by one if isLiked is true
function addLikesToPage(i) {
    let likesCount = posts[i].likes
        if(!posts[i].isLiked) {        
            likesCount++
            posts[i].likes = likesCount
            renderPosts()  
            posts[i].isLiked = true
        } else {
            likesCount--
            posts[i].likes = likesCount
            renderPosts()  
            posts[i].isLiked = false        
        }
    }
