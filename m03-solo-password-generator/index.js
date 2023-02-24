//Access the DOM
const toggle = document.getElementById('toggle')
const sliderValue = document.getElementById('password-length')
const lengthText = document.getElementById('length-text')
const nums = document.getElementById('numbers-checkbox')
const chars = document.getElementById('characters-checkbox')
const btn = document.getElementById('btn-generate')
const passwordDivs = document.querySelectorAll('.password-div')
const root = document.querySelector(':root')

//Global Variables
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols= '!@#$%^&*<>?~'
let customArr = []
lengthText.textContent = sliderValue.value

//Event Listeners
btn.addEventListener('click', () => {
    renderPasswords()  
})

toggle.addEventListener('click', switchTheme, iconVisibility, false)
    
//Functions   
function showLength() {
    lengthText.textContent = sliderValue.value 
}

function renderPasswords() {
    passwordDivs.forEach(i => i.textContent = generatePassword())
}

function generatePassword() {
    const passwordLength = sliderValue.value
    nums.checked && chars.checked ? customArr = (lowerCase.concat(upperCase, numbers, symbols)) :
    nums.checked && !chars.checked ? customArr = (lowerCase.concat(upperCase, numbers)) :
    chars.checked && !nums.checked ? customArr = (lowerCase.concat(upperCase, symbols)) :
    customArr = lowerCase.concat(upperCase)
    const newPassword = randomPassword(customArr.split(''),passwordLength).join("")
    iconVisibility()
    return newPassword 
}

function randomPassword(arr,num) {
    const shuffled = arr.sort(() => 0.5 - Math.random())
    return shuffled.slice(0,num)   
}

function iconVisibility() {
    if(customArr.length > 1) {
        passwordDivs.forEach(i => i.classList.remove('icon'))
    }
}

function switchTheme(e) {
    if(e.target.checked) { 
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById('toggle-label').classList.add('light-toggle')
        document.getElementById('toggle-label').classList.add('light-toggle::after')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById('toggle-label').classList.remove('light-toggle')
        document.getElementById('toggle-label').classList.remove('light-toggle::after')
    }
}

//for VSCode and Web-browsers
function copyToClipboard(str) {
    navigator && navigator.clipboard && navigator.clipboard.writeText
    alert(`${str} is copied to your clipboard`)
    return navigator.clipboard.writeText(str)
    // return Promise.reject('The Clipboard API is not available.')
}

//for Scrimba 
// function copyToClipboard(str) {
//     const area = document.createElement('textarea')
//     document.body.appendChild(area)
//     area.value = str
//     area.select()
//     document.execCommand('copy')
//     document.body.removeChild(area)
//     alert(`${str} is copied to you clipboard`)
// }
