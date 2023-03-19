// require('dotenv').config()


// const apiKey = "Your API key"
// const endpoint = "https://www.googleapis.com/youtube/v3/search"
// const channelId = "Replace with channel ID"

// const myApiKey = process.env.API_KEY

// console.log(myApiKey)

// console.log(process.env.MESSAGE)


//Access the DOM
const selectEl = document.getElementById('select-channel')
const searchEl = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const cardsGrid = document.getElementById('cards-grid')



//Functions
async function searchMovies() {
    const userChannel = selectEl.value  
        console.log(userChannel)
    const userSearch = searchEl.value
        console.log(userSearch)

    const res = await fetch("")

    if(!res) {
        const message = 'No matching results'
        cardsGrid.innerHTML = `
            <div class="error-message">
                <p>No matching results... <br><br> Please search again.</p>
            </div>`
        throw new Error(message)
    }

    const movies = await res.json()
    renderCards(movies)
    // return movies
    
}

// searchMovies().then(() => {

// })



renderCards()

function renderCards() {
    cardsGrid.innerHTML = `
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
        <div class="card">
            <img src="./assets/mario-brothers-thumbnail.png" alt="mario brothers">
            <p>The Super Mario Bros Movie Teaser Trailer (2023)</p>
        </div>
    `
}

//Event Listeners
btnSearch.addEventListener('click', searchMovies)