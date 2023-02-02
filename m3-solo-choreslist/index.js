import {gifsArr} from "./data.js"

//Access the DOM
const inputEl = document.getElementById('inputEl')
const btnAdd = document.getElementById('add-btn')
const btnRemove = document.getElementById('remove-btn')
const list = document.getElementById('chores-list')
const modal = document.getElementById('modal')
const btnClose = document.getElementById('close-btn')

//Global Variables
let choresArr = []
window.localStorage.length > 0 ?
    choresArr = JSON.parse(window.localStorage.getItem('chore')) :
    choresArr = []


//Event Listeners
btnAdd.addEventListener('click', ()=>{
    inputEl.value.length === 0 ? inputEl.placeholder = 'Do dishes' : addChore()
})

btnRemove.addEventListener('click', ()=> {
    clearChorelist()
})

btnClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden'
})


//Functions
renderChores()

function renderChores() {
    list.innerHTML = '' 
    choresArr.forEach(i => {
        list.innerHTML += `<div data-id="${i}" class="chore center">${i}</div>`  
    })
}

list.addEventListener('click', (e) => {
    //target ID
    const removeItem = e.target.dataset.id
    console.log(removeItem)
    console.log(JSON.stringify(removeItem))
    //remove item from choresArr
    console.log(choresArr.filter((i) => i !== JSON.stringify(removeItem)))
    console.log(choresArr.filter((i) => i !== "cat"))
    console.log(choresArr)
    //remove item from localStorage

    //renderChores()   
    // if(choresArr.length === 0) {showModal()}
})

function addChore() {
    if(!choresArr.includes(inputEl.value)){
        choresArr.push(inputEl.value)
        window.localStorage.setItem('chore', JSON.stringify(choresArr))
    }
    renderChores()
}

function clearChorelist() {
    list.innerHTML = ''
    inputEl.placeholder = 'Do dishes'
    inputEl.value = ''
    choresArr = []
    window.localStorage.clear()
}

function showModal() {
    function random() {
        return Math.floor(Math.random()*gifsArr.length)
    }
    modal.style.backgroundImage = gifsArr[random()]
    modal.style.visibility = 'visible'
}
