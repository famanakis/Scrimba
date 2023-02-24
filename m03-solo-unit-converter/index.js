//Access the DOM
const inputEl = document.getElementById("inputEl")
const lengthEl = document.getElementById("lengthEl")
const volumeEl = document.getElementById("volumeEl")
const massEl = document.getElementById("massEl")
const submitBtn = document.getElementById("submit-btn")

//Global Variable(s)
let unit = 0

//Initial Page Render
renderNewPage()

//Event Listeners
submitBtn.addEventListener("click", convertValue)
inputEl.addEventListener('click', reset)

//Functions
function renderNewPage() {
    lengthEl.innerHTML = `0 meters = 0 feet | 0 feet = 0 meters`
    volumeEl.innerHTML = `0 liters = 0 gallons | 0 gallons = 0 liters`
    massEl.innerHTML = `0 kilos = 0 pounds | 0 pounds = 0 kilos`    
}

function convertValue() {
    let unit = inputEl.textContent
    //Code to convert Units
    if(unit.length > 3) {
        lengthEl.innerHTML = `
        <div>${unit} meters = ${(unit*3.280839895).toFixed(3)} feet</div>
        <hr width="125px">
        <div>${unit} feet = ${(unit*0.3048).toFixed(3)} meters</div>`
        volumeEl.innerHTML = `
        <div>${unit} liters = ${(unit*0.264172).toFixed(3)} gallons</div>
        <hr width="125px">
        <div>${unit} gallons = ${(unit*3.78542).toFixed(3)} liters</div>`
        massEl.innerHTML = `
        <div>${unit} kilos = ${(unit*2.2046226218).toFixed(3)} pounds</div>
        <hr width="125px"> 
        <div>${unit} pounds = ${(unit*0.45359237).toFixed(3)} kilos</div>`
    } else {
        lengthEl.innerHTML = `
        ${unit} meters = ${(unit*3.280839895).toFixed(3)} feet | 
        ${unit} feet = ${(unit*0.3048).toFixed(3)} meters`
        volumeEl.innerHTML = `
        ${unit} liters = ${(unit*0.264172).toFixed(3)} gallons | 
        ${unit} gallons = ${(unit*3.78542).toFixed(3)} liters`
        massEl.innerHTML = `
        ${unit} kilos = ${(unit*2.2046226218).toFixed(3)} pounds | 
        ${unit} pounds = ${(unit*0.45359237).toFixed(3)} kilos`
    }
}

function reset() {
    inputEl.textContent = ''
    renderNewPage()
    submitBtn.disabled = true
}

function numbersOnly(key) {
    return (key >= '0' && key <= '9') ||
      ['+','(',')','-','ArrowLeft','ArrowRight','Delete','Backspace'].includes(key);
}

function ifNoInput() {
    return inputEl.textContent === '' ? submitBtn.disabled = true : submitBtn.disabled = false
}



