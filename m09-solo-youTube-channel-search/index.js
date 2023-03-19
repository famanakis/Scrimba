// require('dotenv').config()


// const apiKey = "Your API key"
// const endpoint = "https://www.googleapis.com/youtube/v3/search"
// const channelId = "Replace with channel ID"

// const myApiKey = process.env.API_KEY

// console.log(myApiKey)

// console.log(process.env.MESSAGE)


//Access the DOM
const searchEl = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const cardsGrid = document.getElementById('cards-grid')



//Functions
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

renderCards()

//Event Listeners
btnSearch.addEventListener('click', () => console.log('button clicked'))