import Dog from './dogClass.js'
import dogs from './data.js'

//Variables
const dogCard = document.getElementById("main-content")
const likeBtn = document.getElementById("likeBtn")
const rejectBtn = document.getElementById("rejectBtn")
let dogsIndex = 0
let currentDog = new Dog(dogs[dogsIndex])

//Event listeners
likeBtn.addEventListener('click', ()=> {
    const likeBadge = document.querySelector('#likeBadge')
    likeBadge.style.visibility='visible'
    rejectBadge.style.visibility='hidden'
    setTimeout(hideBadges, 3000)
    setTimeout(renderDogs, 3500) 
    currentDog.setMatchStatus(true)
    //alertStatus() for testing puroses
    })
    
rejectBtn.addEventListener('click', ()=> {
    const rejectBadge = document.querySelector('#rejectBadge')
    likeBadge.style.visibility='hidden'
    rejectBadge.style.visibility='visible'
    setTimeout(hideBadges, 3000)
    setTimeout(renderDogs, 3500)
    currentDog.setMatchStatus(false,true)
    //alertStatus() for testing purposes
    })

//Initial Page Load
renderDogs()

//Functions
function renderDogs() {
    currentDog = new Dog(dogs[dogsIndex]) 
    dogCard.innerHTML = currentDog.dogHtml()  
        if (dogsIndex === dogs.length) {
        //dogsIndex = 0
        end()
    } else {
        dogsIndex++
    }
}
   
function hideBadges() {
    likeBadge.style.visibility='hidden'
    rejectBadge.style.visibility='hidden'  
}

function alertStatus() {
    alert("Dog has been liked: " + currentDog.hasBeenLiked + "\r\n" +  "Dog has been swiped: " + currentDog.hasBeenSwiped)
}

function end() {
    dogCard.innerHTML = `
    <h1 class="no-more">No more dogs <br> try a new search...</h1>`
    likeBtn.style.visibility='hidden'
    rejectBtn.style.visibility='hidden'
    document.body.style.background = '#F6F7FB'
}