import {renderWatchlistHtml} from './renderWatchlistHtml.js'
import {API_KEY} from './index.js'

//Access the DOM
const mainPage = document.getElementById('main-content-watchlist')

//Variables
let myMovies = JSON.parse(localStorage.getItem("movieID"))
!myMovies && (myMovies = [])

//Functions
renderWatchlist()

function renderWatchlist() {
  //check local storage, if empty then render message
  if(myMovies.length === 0) {
    mainPage.innerHTML = `<div class="flex-list-empty">
      <p class="p-bold">Your watchlist is looking a little empty...</p>
      <a href="../index.html"><img src="./assets/plus-icon.png" class="plus" alt="plus icon" style="margin: -8px">Watchlist</a>  
    </div>`       
  } else {
    mainPage.innerHTML = ''
    //if local storage has data, call to API and render watchlist
    myMovies.forEach((item)=>{
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${item}`)
        .then(res => res.json())
        .then(data => {
          renderWatchlistHtml(data)
        })   
    })  
  }
}

//Event Listeners
//Remove Target from Local Storage and Render Page
document.addEventListener('click', (e)=> {   
  let item = e.target.dataset.imdbid
  if(item !== undefined) {
    const index = myMovies.indexOf(item)
    const newMyMoviesArr = myMovies.splice(index, 1)
    localStorage.setItem("movieID", JSON.stringify(newMyMoviesArr))
    renderWatchlist() 
  }
})
