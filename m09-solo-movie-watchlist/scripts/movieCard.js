export function movieCard(data, element, myStorage) {
    const { imdbID, Title, imdbRating, Runtime, Genre, Plot } = data
    if (data.Poster.length < 4 || !data.Poster) {data.Poster = './assets/images/default-poster.jpg'}      
    const addRemoveClass = myStorage.includes(imdbID) ? 'minus' : 'plus'

    element.innerHTML += `
        <div class="movie-card">
            <div class="poster-content">
                <img src="${data.Poster}" id="filmPoster" class="film-poster" alt="movie poster image"
            </div>
            <div class="card-main-content">
                <div class="film-data">
                    <p class="film-title">${Title}</p>
                    <img src="./assets/star-icon.png" class="star" alt="star icon for ratings">
                    <p>${imdbRating}</p>
                </div>       
                <div class="film-stats">
                    <p class="runtime">${Runtime}</p>
                    <p>${Genre}</p>
                    <div class="watchlist-and-btn">
                        <span id="${imdbID}" 
                        class="${addRemoveClass} btn-add-remove" 
                        data-imdbid="${imdbID}"></span>
                        <span class="text-watchlist">Watchlist</span>
                    </div>
                </div>
                <div class="flex-row">
                    <p class="plot">${Plot}
                    </p>
                </div>
            </div>
        </div>
        `
}
