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
    getOpenAI(input)
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
textInput.addEventListener('click', ()=> textInput.value = '')

//Example of grammar correct
// my API key is in my gmail
function getOpenAI(userInput) {
    const API_ENDPOINT = 'https://api.openai.com/v1/edits';
    const API_KEY = //my API key goes here//; 
    
    const data = {
    model: 'text-davinci-edit-001',
    input: userInput,
    instruction: 'Fix the spelling mistakes',
    temperature: .2,
    };

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
    };

    fetch(API_ENDPOINT, options)
    .then(response => response.json())
    .then(data => {
        const responseAI = data.choices[0].text.trim()
        console.log(responseAI)
        textInput.value = textInput.value + '\n' + responseAI
    })
    .catch(error => console.error(error));
}

