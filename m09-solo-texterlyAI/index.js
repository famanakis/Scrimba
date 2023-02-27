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
    if(textInput.value.length > 0){
        spinner.classList.remove("hide")
        setTimeout(processText, 2500)
    }
}

function processText() {
    const input = textInput.value
    spinner.classList.add("hide")
    // getOpenAI(input)
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

function copyAndClear() {
    if(textInput.value.length > 0) {
        selfCopy(textInput.value)
        setTimeout(()=>(textInput.value = '', 
        textInput.placeholder = 'Paste your text here.',
        charEl.textContent = 0,
        wordEl.textContent = 0), 3000)
    }
}

async function selfCopy(text) {
    copied.style.visibility = 'visible'
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text)
            copied.classList.remove('hide')
            setTimeout (()=>(copied.style.visibility = 'hidden'), 2500)
        } catch (error) {
            deprecatedCopyToClipboard(text)
        }
        } else { //if clipboard API not supported use deprecated CopyToClipboard
        deprecatedCopyToClipboard(text)
    }
}
//deprecated version to work on Scrimba
function deprecatedCopyToClipboard(text) {
    const area = document.createElement('textarea')
    document.body.appendChild(area)
    area.value = text
    area.select()
    document.execCommand('copy')
    document.body.removeChild(area)
}

//Event Listeners
btnProcess.addEventListener('click', beginProcess)
btnCopy.addEventListener('click', copyAndClear)


//Example of grammar correct
// my API key is in my email
// function getOpenAI(userInput) {
//     const API_ENDPOINT = 'https://api.openai.com/v1/edits'
//     const API_KEY = //my api key goes here 
    
//     const data = {
//     model: 'text-davinci-edit-001',
//     input: userInput,
//     instruction: 'Fix the spelling mistakes',
//     temperature: .2,
//     };

//     const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify(data),
//     };

//     fetch(API_ENDPOINT, options)
//     .then(response => response.json())
//     .then(data => {
//         const responseAI = data.choices[0].text.trim()
//         console.log(responseAI)
//         textInput.value = responseAI
//     })
//     .catch(error => console.error(error))
// }

