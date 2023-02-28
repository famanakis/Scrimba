import { selfCopy } from "./copy.js"
import { getOpenAI } from "./getOpenAI.js"

//Access the DOM
const textInput = document.getElementById('text-section')
const btnProcess = document.getElementById('btn-process')
const charEl = document.getElementById('char-text')
const wordEl = document.getElementById('words-text')
const spinner = document.getElementById('spinner')
const btnCopy = document.getElementById('btn-copy')

//Functions
function beginProcess() {  
    //begin processing text if text input length is greater than one
    if(textInput.value.length > 0){
        spinner.classList.remove("hide")
        processText()
    }
}

function processText() {
    //create promise - run getOpenAI and when response generates -add it to the page
    return new Promise((resolve, reject) => {
        const input = textInput.value
        getOpenAI(input)
            .then(responseAI => {
                spinner.classList.add("hide")
                textInput.value = responseAI
                charCount(input)
                wordCount(input)
                resolve()
            })
            .catch(error => {
                console.error(error)
                spinner.classList.add("hide")
                textInput.value = 'Bugs somewhere in the machine - please try again.'
                textInput.addEventListener('click', clearTextField)
                reject(error)
            })
    })
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

function copyAndClear() {
    if(textInput.value.length > 0) {
        selfCopy(textInput.value)
        setTimeout(()=> clearTextField(), 3000)
    }
}

function clearTextField() {
    textInput.value = '', 
    textInput.placeholder = 'Paste your text here.',
    charEl.textContent = 0,
    wordEl.textContent = 0
}

//Event Listeners
btnProcess.addEventListener('click', beginProcess)

btnCopy.addEventListener('click', copyAndClear)

textInput.addEventListener('dblclick', ()=> {
    clearTextField()
    textInput.placeholder = ''
    })

