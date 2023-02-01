//Access the DOM
const inputEl = document.getElementById('inputEl')
const btnAdd = document.getElementById('add-btn')
const btnRemove = document.getElementById('remove-btn')
const list = document.getElementById('chores-list')
const modal = document.getElementById('modal')
const btnClose = document.getElementById('close-btn')

//Global Variables
choresArr = []






//Functions
function showModal() {
    modal.style.visibility = 'visible'
}

btnClose.addEventListener('click', () => {
        modal.style.visibility = 'hidden'
    })