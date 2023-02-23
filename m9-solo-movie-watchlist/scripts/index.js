import {renderSearch} from "./renderSearchHtml.js"

//Access the DOM
const inputEl = document.getElementById("inputEl")
const searchBtn = document.getElementById("searchBtn")
const mainContentEl = document.getElementById("main-content")
export {mainContentEl, watchArr}

//Variables
let watchArr = JSON.parse(localStorage.getItem("movieID"))
if (!watchArr) {watchArr = []}

// Fetch Search Data by Input.value and put data into the movieArray function
function getMovies() {
    let value = inputEl.value
    fetch(`https://www.omdbapi.com/?apikey=aec85da8&s=${value}`)
        .then(res => res.json())
        .then(data => {
            movieArray(data)   
        })
        .catch(() => mainContentEl.innerHTML = `
        <div class="flex-list-empty">
            <p class="p-bold">Unable to find what you’re looking<br>
            &nbsp&nbsp&nbsp&nbsp for. &nbsp Please try another search.</p>
        </div>
        `
    )
}

//Get movie Search data and map to an Array - then render data to Page
function movieArray(data) {
    const movieArr = data.Search
    for (let movie of movieArr) {
        fetch(`https://www.omdbapi.com/?apikey=aec85da8&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(data => {
                renderSearch(data)
            })
    }
}

//Event Listeners
//Input Press Enter Button to submit Search
inputEl.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        searchBtn.click();
    }
})  

//Search Button Click to submit search
searchBtn.addEventListener("click", (e) => {  
    e.preventDefault()
    mainContentEl.innerHTML = ""
    getMovies()
}) 

//Add or Remove Target to Local Storage and flip plus/minus
document.addEventListener('click', (e)=> { 
    e.preventDefault
    const targetEl = document.getElementById(e.target.dataset.imdbid)
    if (e.target.dataset.imdbid) {
        if (!watchArr.includes(e.target.dataset.imdbid)) {
            watchArr.push(e.target.dataset.imdbid)
            targetEl.classList.add('minus')
            targetEl.classList.remove('plus')  
            } else {
                Array.prototype.remove = function(value) {
                    this.splice(this.indexOf(value), 1)
                    }
                let item = e.target.dataset.imdbid
                watchArr.remove(item)
                targetEl.classList.add('plus')
                targetEl.classList.remove('minus')
        }
    localStorage.setItem("movieID", JSON.stringify(watchArr))
    }
})