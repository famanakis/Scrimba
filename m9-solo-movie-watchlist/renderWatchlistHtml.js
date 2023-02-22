export function renderWatchlistHtml(data) {
    const {Title, imdbRating, Runtime, Genre, imdbID, Plot} = data    

    if (data.Poster.length < 4) {
        data.Poster = './Images/DefaultPoster.jpg'
        }
          
    const mainContentWatchlist = document.getElementById('main-content-watchlist')  
    mainContentWatchlist.innerHTML += `
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
                    <span class="minus grow" data-imdbid="${imdbID}"></span>
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

