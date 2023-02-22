import {mainContentEl, watchArr} from './index.js'

export function renderSearch(data) {

    const { imdbID, Title, imdbRating, Runtime, Genre, Plot } = data

    if (data.Poster.length < 4) {
        data.Poster = './Images/DefaultPoster.jpg'
        }
     
    let addRemoveClass = 'plus'   
    if (watchArr.includes(imdbID)) {
            addRemoveClass = 'minus'             
        }
     
    mainContentEl.innerHTML += `
        <div class="flex-list">
            <div class="flex-row">
                <img src="${data.Poster}" id="filmPoster" class="filmPoster"
            </div>
            <div>
                <p class="filmData">
                    <span class="filmTitle">${Title}</span>
                    <img src="Images/StarIcon.png" class="star">${imdbRating}
                </p>       
                <p>
                    <span class="runtime">${Runtime}</span>
                    <span>${Genre}</span>
                    <span id="${imdbID}" 
                        class="${addRemoveClass} grow" 
                        data-imdbid="${imdbID}"></span>
                    <span class="watchlistBtn">Watchlist</span>
                </p>
                <div class="flex-row">
                    <p class="plot">${Plot}
                    </p>
                </div>
            </div>
        </div>
        `
}
