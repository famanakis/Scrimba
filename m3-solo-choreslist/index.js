//Access the DOM
const inputEl = document.getElementById('inputEl')
const btnAdd = document.getElementById('add-btn')
const btnRemove = document.getElementById('remove-btn')
const list = document.getElementById('chores-list')
const modal = document.getElementById('modal')
const btnClose = document.getElementById('close-btn')

//Global Variables
// choresArr = []
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
        list.innerHTML += `<div class="chore center">${i}</div>`
    })
}

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
    modal.style.visibility = 'visible'
}

