import {gifsArr} from "./data.js"

//Access the DOM
const inputEl = document.getElementById('inputEl')
const btnAdd = document.getElementById('add-btn')
const btnRemove = document.getElementById('remove-btn')
const list = document.getElementById('chores-list')
const modal = document.getElementById('modal')
const modalBtnClose = document.getElementById('close-btn')

const storedArray = JSON.parse(localStorage.getItem('chore'))

//Global Variables
let choresArr = []

//Event Listeners
btnAdd.addEventListener('click', ()=> {
    inputEl.value.length === 0 ? inputEl.placeholder = 'Next chore' : addChore()
})

btnRemove.addEventListener('click', ()=> {
    clearChorelist()
})

modalBtnClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden'
})

list.addEventListener('dblclick', (e) => {
    e.preventDefault
    const item = e.target.dataset.value
    const storedChores = JSON.parse(localStorage.getItem('chore'))
    localStorage.removeItem('chore', choresArr)
    let filteredArr = storedChores.filter(value => value != item)
    choresArr = filteredArr
    localStorage.setItem('chore', JSON.stringify(choresArr))
    renderChores()   
    if(choresArr.length === 0) {
        inputEl.placeholder = 'Do dishes'
        inputEl.value = ''
        showModal()
    }
})

//Functions
renderChores()

function renderChores() {
    list.innerHTML = '' 
    localStorage.length > 0 ?
        choresArr = JSON.parse(localStorage.getItem('chore')) :
        choresArr = []
    choresArr.forEach(i => {
        list.innerHTML += `<div data-value="${i}" class="chore center">${i}</div>`  
    })
}

function addChore() {
    if(!choresArr.includes(inputEl.value)){
        choresArr.push(inputEl.value)
        localStorage.setItem('chore', JSON.stringify(choresArr))
    }
    renderChores()
}

function clearChorelist() {
    list.innerHTML = ''
    inputEl.placeholder = 'Do dishes'
    inputEl.value = ''
    choresArr = []
    localStorage.clear()
}

function showModal() {
    function random() {
        return Math.floor(Math.random()*gifsArr.length)
    }
    modal.style.backgroundImage = gifsArr[random()]
    modal.style.visibility = 'visible'
}
