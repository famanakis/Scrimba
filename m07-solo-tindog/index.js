import {Dog} from "./dogClass.js"
import {dogsData}  from "./dogsData.js"

//Variables
const dogCard = document.getElementById("main-content")
const likeBtn = document.getElementById("likeBtn")
const rejectBtn = document.getElementById("rejectBtn")
let dogsIndex = 0
let currentDog = new Dog(dogsData[dogsIndex])

//Initial Page Load
renderDogs()

//Functions
function renderDogs() {
    currentDog = new Dog(dogsData[dogsIndex]) 
    dogCard.innerHTML = currentDog.dogHtml()  
    dogsIndex === dogsData.length ? end() : dogsIndex++
}

function end() {
    dogCard.innerHTML = `<h1 class="no-more">No more dogs <br> try a new search...</h1>`
    document.body.style.background = '#F6F7FB'
}

function renderBadge(id, isLiked) {
    const badge = document.getElementById(id)
    badge.style.visibility = 'visible'
    setTimeout(renderDogs, 2000)
    currentDog.setMatchStatus(isLiked)
}

//Event listeners
likeBtn.addEventListener('click', ()=> renderBadge('likeBadge', true))
rejectBtn.addEventListener('click', () => renderBadge('rejectBadge', false))