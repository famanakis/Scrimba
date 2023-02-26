//Access the DOM
const textInput = document.getElementById('text-section')
const btnProcess = document.getElementById('btn-process')
const charEl = document.getElementById('char-text')
const wordEl = document.getElementById('words-text')

//Variables
charEl.textContent = 0
wordEl.textContent = 0

//Functions
function processText() {
    const input = textInput.value
    charCount(input)
    wordCount(input)
}

function charCount(text) {
    const regex = /\S/g
    const chars = text.split(regex).length - 1
    charEl.textContent = chars
}

function wordCount(text) {
    const words = text.split(' ').length
    wordEl.textContent = words
}

//Event Listeners
btnProcess.addEventListener('click', processText)
