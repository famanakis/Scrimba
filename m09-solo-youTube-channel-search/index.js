
//Access the DOM
const selectEl = document.getElementById('select-channel')
const searchEl = document.getElementById('input-search')
const btnSearch = document.getElementById('btn-search')
const cardsGrid = document.getElementById('cards-grid')
const myApiKey = process.env.API_KEY

//Functions
async function testSearch() {

    const userChannel = selectEl.value
    const userSearch = searchEl.value
    const endpoint = `https://youtube.googleapis.com/youtube/v3/search?key=${myApiKey}&q=${userSearch}&channelId=${userChannel}&maxResults=6&part=snippet`

    const res = await fetch(endpoint)
    const data = await res.json()
    try {  
        cardsGrid.innerHTML = displayGrid(data)
    }
    catch(error) {
        const message = 'No matching results'
        cardsGrid.innerHTML = `
            <div class="error-message">
                <p>No matching results... <br><br> Please search again.</p>
            </div>`
        throw new Error(message)
    }
}

function displayGrid(data){
    const cardsArr = data.items.map(item => 
            `<div id="${item.id.videoId}" class="card">
            <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank" alt="go to video">
                <img src="${item.snippet.thumbnails.medium.url}" alt="${(item.snippet.title).split('|')[0].trim()}">
            </a>
            <p>${(item.snippet.title.split('|')[0].trim().length > 30 ? item.snippet.title.split('|')[0].trim().substring(0, 30) + '...' : item.snippet.title.split('|')[0].trim())}</p>
            <p class="description">${item.snippet.description}</p>
            <span class="year">${new Date(item.snippet.publishedAt).getFullYear()}</span>
            </div>`
        ).join('')
        
    return cardsArr  
}
  
//Event Listeners
btnSearch.addEventListener('click', testSearch)



