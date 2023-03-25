import { API_KEY } from './apikey.js'
import { movieCard } from './movieCard.js'
import { addRemoveMovie } from './addRemoveMovie.js'
import { movieStorage } from './movieStorage.js'

//Functions
renderWatchlist()

function renderWatchlist() {
  const mainPage = document.getElementById('main-content-watchlist')
  !movieStorage && (movieStorage = [])
  if(movieStorage.length === 0) {
    mainPage.innerHTML = `<div class="flex-list-empty">
      <p class="p-bold">Your watchlist is looking a little empty...</p>
      <a href="./index.html"><img src="./assets/plus-icon.png" class="btn-add-remove" alt="plus icon">Watchlist</a>  
    </div>`       
  } else {
    mainPage.innerHTML = ''
    movieStorage.forEach((imdbID)=>{
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
        .then(res => res.json())
        .then(data => {
          movieCard(data, mainPage, movieStorage)
        })   
    })  
  }
}

//Event Listeners
document.addEventListener('click', (target)=> {
  addRemoveMovie(target, movieStorage)
  renderWatchlist()
})