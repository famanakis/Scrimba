const numberArr = []
const pagerText = document.getElementById("pager-text")
const phoneText = document.getElementById("phone-text")
const keypad = document.getElementById("keypad")
const progressBar = document.getElementById("progress-bar")
const audio = new Audio('./assets/pager.wav')
const sendBtn = document.getElementById("btn-send")
sendBtn.disabled = true

function handleKey(value) {
    sendBtn.disabled = false
    numberArr.push(value)
    if(numberArr.length < 16) {
        phoneText.textContent = numberArr.join('')
    }  
}

function resetNumArr() {
    location.reload()
}

function sendNumber() {   
    const keys = keypad.getElementsByTagName('*')
    for(let i = 0; i < keys.length; i++) {
        keys[i].disabled = true
        } 
    progressBar.className = "color" 
    setTimeout(()=> {
        pagerText.textContent = numberArr.slice(0,15).join('')
        audio.play()
        }, 4000)
    setTimeout(()=> {location.reload()}, 15000)
} 

