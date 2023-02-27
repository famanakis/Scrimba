//Access the DOM
const textInput = document.getElementById('text-section')
const btnProcess = document.getElementById('btn-process')
const charEl = document.getElementById('char-text')
const wordEl = document.getElementById('words-text')
const spinner = document.getElementById('spinner')
const copied = document.getElementById('copied')
const btnCopy = document.getElementById('btn-copy')

//Variables
charEl.textContent = 0
wordEl.textContent = 0

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

async function selfCopy(text) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text)
            copied.style.visibility = 'visible'
            setTimeout (()=>(copied.style.visibility = 'hidden'), 2500)
        } catch (error) { //if error then use deprecated CopyToClipboard
            copyToClipboard(text)
        }
    } else { //if clipboard API not supported use deprecated CopyToClipboard
            copyToClipboard(text)
    }
}

//deprecated copy to clipboard
function copyToClipboard(text) {
    copied.style.visibility = 'visible'
    setTimeout (()=>(copied.style.visibility = 'hidden'), 2500)
    const area = document.createElement('textarea')
    document.body.appendChild(area)
    area.value = text
    area.select()
    document.execCommand('copy')
    document.body.removeChild(area)
}

//post and fetch from openAI
//user will need to put their own API key in the const API_KEY below
function getOpenAI(userInput) {
    const API_ENDPOINT = 'https://api.openai.com/v1/edits'
    const API_KEY = 'your key here'

    const data = {
    model: 'text-davinci-edit-001',
    input: userInput,
    instruction: 'Fix the spelling mistakes',
    temperature: .5,
    }

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
    }

    return fetch(API_ENDPOINT, options)
        .then(response => response.json())
        .then(data => {
            const responseAI = data.choices[0].text.trim()
            console.log(responseAI)
            return responseAI
        })
    .catch(error => {
        console.error(error)
        throw error
    })
}

//Event Listeners
btnProcess.addEventListener('click', beginProcess)
btnCopy.addEventListener('click', copyAndClear)
textInput.addEventListener('dblclick', ()=> {
    clearTextField()
    textInput.placeholder = ''
    })

