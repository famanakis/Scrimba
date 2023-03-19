//Access the DOM
const selectEl = document.getElementById('select-channel')
const searchEl = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const cardsGrid = document.getElementById('cards-grid')
const myApiKey = 'see .env file'
const endpoint = "https://www.googleapis.com/youtube/v3/search"
const channelId = "Replace with channel ID"

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


//Help Page youTube API

//   /**
//    * Sample JavaScript code for youtube.search.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */

//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.youtube.search.list({
//       "part": [
//         "snippet"
//       ],
//       "channelId": "name here",
    //   "maxResults": 6,
    //   "q": "surfing"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");

