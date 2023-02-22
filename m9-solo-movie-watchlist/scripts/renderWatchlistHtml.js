export function renderWatchlistHtml(data) {
    const {Title, imdbRating, Runtime, Genre, imdbID, Plot} = data    
    if (data.Poster.length < 4) { data.Poster = '../images/default-poster.jpg'}       
    const mainContentWatchlist = document.getElementById('main-content-watchlist')  
    
    mainContentWatchlist.innerHTML += `
        <div class="flex-list">
            <div class="flex-row">
                <img src="${data.Poster}" id="filmPoster" class="film-poster" alt="image of movie poster"
            </div>
            <div>
                <p class="filmData">
                    <span class="film-title">${Title}</span>
                    <img src="../images/star-icon.png" class="star" alt="star icon for ratings">${imdbRating}
                </p>       
                <p>
                    <span class="runtime">${Runtime}</span>
                    <span>${Genre}</span>
                    <span class="minus grow" data-imdbid="${imdbID}"></span>
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

