//Accessing the DOM
const homeScoreEl = document.getElementById("homeScore")
const awayScoreEl = document.getElementById("awayScore")
const addPointsHome = document.getElementById("addPointsHome")
const addPointsAway = document.getElementById("addPointsAway")
const newGameBtn = document.getElementById("btn-new-game")
const clickBtn = document.querySelectorAll('.btn')

//Global Variables
let home = 0
let away = 0
homeScoreEl.innerText = home
awayScoreEl.innerText = away

//Event Listeners
newGameBtn.addEventListener('click', clearBoard)

//Functions
function onClickHome(val) {
    home += parseInt(val)
    homeScoreEl.innerText = home
    updateCurrentWinner()
}

function onClickAway(val) {
    away += parseInt(val)
    awayScoreEl.innerText = away
    updateCurrentWinner()
}

function updateCurrentWinner() {
    if(away > home) {
        awayScoreEl.classList.add('winner')
        homeScoreEl.classList.remove('winner')
    } else if(home > away) {
        homeScoreEl.classList.add('winner')
        awayScoreEl.classList.remove('winner')
    } else {
        homeScoreEl.classList.remove('winner')
        awayScoreEl.classList.remove('winner') 
    }           
}

function clearBoard() {
    home = 0
    homeScoreEl.innerText = 0
    away = 0
    awayScoreEl.innerText = 0
    homeScoreEl.classList.remove('winner')
    awayScoreEl.classList.remove('winner')
}
