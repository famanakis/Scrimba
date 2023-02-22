import {renderWatchlistHtml} from './renderWatchlistHtml.js'

const mainPage = document.getElementById('main-content-watchlist')
const watchArr = JSON.parse(localStorage.getItem("movieID"))

//Remove Target from Local Storage and Render Page
document.addEventListener('click', (e)=> { 
    const targetEl = document.getElementById(e.target.dataset.imdbid)   
    if (e.target.dataset.imdbid) {
        if (!watchArr.includes(e.target.dataset.imdbid)) {
            watchArr.push(e.target.dataset.imdbid)   
        } else {
            Array.prototype.remove = function(value) {
                this.splice(this.indexOf(value), 1)
            }
            let item = e.target.dataset.imdbid
            watchArr.remove(item)
        }
    localStorage.setItem("movieID", JSON.stringify(watchArr))
    }
    renderWatchlist()  
})

//Function to render keys from Local Storage to the Page
function renderWatchlist() {
    if(watchArr.length === 0) {
        mainPage.innerHTML = `<div class="flex-list-empty">
                <p class="pBold">Your watchlist is looking a little empty...</p>
                <a href="index.html"><img src="Images/PlusIcon.png" class="plus" style="margin: -8px">Watchlist</a>  
            </div>`       
        } else {
        mainPage.innerHTML = ''
        watchArr.forEach((item)=>{
            fetch(`https://www.omdbapi.com/?apikey=aec85da8&i=${item}`)
            .then(res => res.json())
            .then(data => {
                renderWatchlistHtml(data)
                    })   
                })  
            }
}

renderWatchlist()



