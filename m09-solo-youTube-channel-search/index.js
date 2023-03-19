//Access the DOM
const selectEl = document.getElementById('select-channel')
const searchEl = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const cardsGrid = document.getElementById('cards-grid')
const myApiKey = 'see .env file'
const endpoint = "https://www.googleapis.com/youtube/v3/search"


//Functions

//Load Client
function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY")
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API") },
              function(err) { console.error("Error loading GAPI client for API", err) })
  }
// Make sure the client is loaded before calling this method.
function execute() {
    const userInput = searchEl.value
    const channelId = selectEl.value
return gapi.client.youtube.search.list({
    "part": [
    "snippet"
    ],
    "channelId": channelId,
    "maxResults": 6,
    "q": userInput
})
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
        
            const data = response.result //test to see if this works

            const cardData = data.items.map(item => 
                `<div id="${item.id.videoId}" class="card">
                <img src="${item.snippet.thumbnails.medium.url}" alt="mario brothers">
                <p>${(item.snippet.title).split('|')[0].trim()}</p>
                </div>`
            )

            cardsGrid.innerHTML = cardData

            console.log("Response", response)
            },

            function() { 
                const message = 'No matching results'
                cardsGrid.innerHTML = `
                    <div class="error-message">
                        <p>No matching results... <br><br> Please search again.</p>
                    </div>`
                throw new Error(message)
            })
}
// gapi.load("client")


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
// btnSearch.addEventListener('click', searchMovies)


//Help Page youTube API

//   /**
//    * Sample JavaScript code for youtube.search.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */
// 
//    * Sample JavaScript code for youtube.search.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */


// </script>
// <button onclick="loadClient()">load</button>
// <button onclick="execute()">execute</button> */}



// For local testing purposes 
// /usr/bin/google-chrome-stable --user-data-dir=test --unsafely-treat-insecure-origin-as-secure=http://localhost:8080

// JavaScript-only: gapi is not defined
// A "gapi is not defined" error occurs when the JavaScript code tries to call the Google API Client Library for JavaScript before the library has loaded. Make sure that your code that references the gapi variable isn't called until after the client library has loaded.



const data = {
    "kind": "youtube#searchListResponse",
    "etag": "-BNxA4Qh__OcEd_zVK48PD71td0",
    "nextPageToken": "CAYQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 2612,
      "resultsPerPage": 6
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "Ug17Y7lmsD_ZpV7ZfMOpln4YpU8",
        "id": {
          "kind": "youtube#video",
          "videoId": "tfU05R9bmc0"
        },
        "snippet": {
          "publishedAt": "2021-09-08T06:21:22Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Reservation Dogs S01 E05 Clip | &#39;Deer Lady Saves the Day&#39; | Rotten Tomatoes TV",
          "description": "Check out the new Reservation Dogs Season 1 Episode 5 Clip starring Kaniehtiio Horn! Let us know what you think in the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/tfU05R9bmc0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/tfU05R9bmc0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/tfU05R9bmc0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-08T06:21:22Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "KlhdwB_frs609vHgrFIt_283bZ4",
        "id": {
          "kind": "youtube#video",
          "videoId": "YWYVTyhFAOU"
        },
        "snippet": {
          "publishedAt": "2021-07-16T14:00:12Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Reservation Dogs Season 1 Trailer | Rotten Tomatoes TV",
          "description": "Check out the new Reservation Dogs Season 1 Trailer starring Lane Factor! Let us know what you think in the comments below.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YWYVTyhFAOU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YWYVTyhFAOU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YWYVTyhFAOU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-16T14:00:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gZr48PC0dPMiYLc97B2tRNAxzrw",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLTovKDoAy18JbDZhRPciEMlOSYQd-8Kxz"
        },
        "snippet": {
          "publishedAt": "2021-08-16T18:54:10Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Reservation Dogs (2021) | TV Scenes | Rotten Tomatoes TV",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NckCAblYMGc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NckCAblYMGc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NckCAblYMGc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-16T18:54:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "J2K3YW0Bfme1tGM320PEk2VCtF4",
        "id": {
          "kind": "youtube#video",
          "videoId": "UEmmsYnJwZc"
        },
        "snippet": {
          "publishedAt": "2021-09-29T17:33:44Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Reservation Dogs S01 E08 Clip | &#39;Today&#39;s the Day&#39; | Rotten Tomatoes TV",
          "description": "Check out the new Reservation Dogs Season 1 Episode 8 Clip starring Paulina Alexis! Let us know what you think in the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UEmmsYnJwZc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UEmmsYnJwZc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UEmmsYnJwZc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2021-09-29T17:33:44Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "TyWr-Qhy2ki9OvGR4v6sHlW-6_g",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCz1GPotHecuLngiLuY739QQ"
        },
        "snippet": {
          "publishedAt": "2017-10-19T00:14:49Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Rotten Tomatoes TV",
          "description": "Welcome to Rotten Tomatoes TV! We bring you the hottest trailers from the most talked-about scripted cable, network, and ...",
          "thumbnails": {
            "default": {
              "url": "https://yt3.ggpht.com/ytc/AL5GRJWvxIxAuEpsbXBCv_COo5fa2yQQdytpGU0ZcS1R=s88-c-k-c0xffffffff-no-rj-mo"
            },
            "medium": {
              "url": "https://yt3.ggpht.com/ytc/AL5GRJWvxIxAuEpsbXBCv_COo5fa2yQQdytpGU0ZcS1R=s240-c-k-c0xffffffff-no-rj-mo"
            },
            "high": {
              "url": "https://yt3.ggpht.com/ytc/AL5GRJWvxIxAuEpsbXBCv_COo5fa2yQQdytpGU0ZcS1R=s800-c-k-c0xffffffff-no-rj-mo"
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2017-10-19T00:14:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "R8TJsZHNCZTjtPLm9IxOCgl2nQ4",
        "id": {
          "kind": "youtube#video",
          "videoId": "SueFkM6ojyg"
        },
        "snippet": {
          "publishedAt": "2022-07-13T19:17:01Z",
          "channelId": "UCz1GPotHecuLngiLuY739QQ",
          "title": "Resident Evil S01 E01 Clip - &#39;Not All Dogs Are Friendly’",
          "description": "Check out the new Resident Evil Season 1 clip! ▻ Learn more: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SueFkM6ojyg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SueFkM6ojyg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SueFkM6ojyg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Rotten Tomatoes TV",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-13T19:17:01Z"
        }
      }
    ]
  }
  

//   console.log('each item data from dataset:', data.items[0])
//   console.log('item video ID:', data.items[0].id.videoId)
//   console.log('item video thumbnail:', data.items[0].snippet.thumbnails.medium.url)
//   console.log('item title:', (data.items[0].snippet.title).split('|')[0].trim())

// const test = data.items.map(item => 
//     `<div id="${item.id.videoId}" class="card">
//     <img src="${item.snippet.thumbnails.medium.url}" alt="mario brothers">
//     <p>${(item.snippet.title).split('|')[0].trim()}</p>
//     </div>`
// )
// console.log(test)

