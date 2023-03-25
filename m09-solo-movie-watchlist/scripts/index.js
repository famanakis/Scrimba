import { API_KEY } from "./apikey.js"
import { movieCard } from "./movieCard.js"
import { addRemoveMovie } from "./addRemoveMovie.js"
import { movieStorage } from "./movieStorage.js"

//Access the DOM
const searchBtn = document.getElementById("searchBtn")
const mainContentEl = document.getElementById("main-content")

// Fetch Search Data by Input.value and put data into the movieArray function
async function getMovies() {
    const value = document.getElementById('inputEl').value
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
    const data = await res.json()
    movieArray(data)
}

async function movieArray(data) {
    const movieArr = data.Search
    try{    
        for (let movie of movieArr) {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
        const data = await res.json()
        movieCard(data, mainContentEl, movieStorage)
        }
    } catch (error) {
        mainContentEl.innerHTML = `
            <div class="flex-list-empty">
                <p class="p-bold">Unable to find what you’re looking<br>
                &nbsp&nbsp&nbsp&nbsp for. &nbsp Please try another search.</p>
            </div>`
        throw error
    } 
}

//Event Listeners
//Input Press Enter Button to submit Search
document.addEventListener("keyup", (e) => (e.key === 'Enter') && searchBtn.click(e))  

//Search Button Click to submit search
searchBtn.addEventListener("click", () => {  
    mainContentEl.innerHTML = ""
    getMovies()
}) 

//Add or Remove Target to Local Storage and flip plus/minus
document.addEventListener('click', (target)=> {
    addRemoveMovie(target, movieStorage)
})


