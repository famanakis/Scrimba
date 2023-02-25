import {mainContentEl, watchArr} from './index.js'

export function renderSearch(data) {
    const { imdbID, Title, imdbRating, Runtime, Genre, Plot } = data
    if (data.Poster.length < 4) {data.Poster = './images/default-poster.jpg'} 
    let addRemoveClass = 'plus'   
    if (watchArr.includes(imdbID)) {addRemoveClass = 'minus'}
     
    mainContentEl.innerHTML += `
        <div class="flex-list">
            <div class="flex-row">
                <img src="${data.Poster}" id="filmPoster" class="film-poster" alt="movie poster image"
            </div>
            <div>
                <p class="filmData">
                    <span class="film-title">${Title}</span>
                    <img src="./images/star-icon.png" class="star" alt="star icon for ratings">${imdbRating}
                </p>       
                <p>
                    <span class="runtime">${Runtime}</span>
                    <span>${Genre}</span>
                    <span id="${imdbID}" 
                        class="${addRemoveClass} grow" 
                        data-imdbid="${imdbID}"></span>
                    <span class="btn-watchlist">Watchlist</span>
                </p>
                <div class="flex-row">
                    <p class="plot">${Plot}
                    </p>
                </div>
            </div>
        </div>
        `
}
