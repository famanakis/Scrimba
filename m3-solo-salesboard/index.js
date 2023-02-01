//Variables to Access the DOM
const starBtn = document.getElementById('btn-star')
const fireBtn = document.getElementById('btn-fire')
const salesCountEl = document.getElementById('sales-count')
const salesEl = document.getElementById('sales')
const achievementsCountEl = document.getElementById('achievements-count')
const achievementsEl = document.getElementById('achievements')
const totalRevenue = document.getElementById('total-revenue')
const totalCommission = document.getElementById('total-commission')
const resetBtn = document.getElementById('btn-reset')
const toggleBtn = document.getElementById('toggle')
const toggle = document.getElementById('label')
const displayDivs = document.querySelectorAll('.display-div')
const imgBorder = document.querySelector('.img-employee')
const buttons = document.querySelectorAll('button')

//Global variables
const salesArr = JSON.parse(window.localStorage.getItem('salesArray')) || []
const achievementsArr = JSON.parse(window.localStorage.getItem('achievementsArray')) || []
const revenueArr = JSON.parse(window.localStorage.getItem('revenueArray')) || []
const commissionArr = JSON.parse(window.localStorage.getItem('commissionArray')) || []

//Product Info
const productA = {
    emoji: "⭐",
    revenue: 200,
    commission: 50
}

const productB = {
    emoji: "🔥",
    revenue: 300,
    commission: 75
} 

//Event Listeners
window.onload = function() {
    getLocalStorage()
    window.localStorage.getItem('mode')
    renderPage()    
}

starBtn.addEventListener('click', (() => {
    addSales(productA)
    addAchievements()
    renderPage()
    }))

fireBtn.addEventListener('click', (() => {
    addSales(productB)
    addAchievements()
    renderPage()
    }))

resetBtn.addEventListener('click', (() => {
    removeLocal()
    renderBlankSalesboard()
    renderPage()
}))

toggleBtn.addEventListener('click', ()=>{toggleBtn.checked ? lightMode() : darkMode()})

//Functions for Data
function addSales(i) {  
    salesArr.push(i.emoji + " ")
    revenueArr.push(i.revenue)
    commissionArr.push(i.commission) 
    saveToLocal()
}

function addAchievements() {
    salesArr.length === 1 ? achievementsArr.push('🔔') : achievementsArr
    salesArr.length === 15 ? achievementsArr.push('🏆') : achievementsArr
    salesArr.length === 25 ? achievementsArr.push('🎯') : achievementsArr
    revenueArr.reduce(sumArr) >= 2500 && !achievementsArr.includes('💰') ?
    achievementsArr.push('💰') : achievementsArr
    commissionArr.reduce(sumArr) >= 500 && !achievementsArr.includes('💲') ?
        achievementsArr.push('💲') : achievementsArr
    commissionArr.reduce(sumArr) >= 1000 && !achievementsArr.includes('🥇') ?
        achievementsArr.push('🥇') : achievementsArr
    commissionArr.reduce(sumArr) >= 2000 && !achievementsArr.includes('💎') ?
        achievementsArr.push('💎') : achievementsArr      
    saveToLocal()
}

function sumArr(a, b) {
    return a + b
}

//Functions for Page Rendering/Styling
function renderBlankSalesboard() {
    salesArr.length = 0
    achievementsArr.length = 0
    revenueArr.length = 0
    totalRevenue.textContent = ''
    commissionArr.length = 0
    totalCommission.textContent = ''
}

function renderPage() {
    localStorage.getItem('mode') === 'dark' || '' ? darkMode() : lightMode()
    salesCountEl.textContent = salesArr.length
    salesEl.textContent = salesArr.join('')
    achievementsCountEl.textContent = achievementsArr.length
    achievementsEl.textContent = achievementsArr.join('')
    revenueArr.length > 1 ? 
        totalRevenue.textContent = revenueArr.reduce(sumArr) : 
        totalRevenue.textContent === 0
    commissionArr.length > 1 ?
        totalCommission.textContent = commissionArr.reduce(sumArr) :
        totalCommission.textContent === 0
}

function lightMode() {
    document.body.classList.add('light-theme')
    localStorage.setItem('mode', 'light')
    toggle.classList.add('light-toggle', 'light-toggle::after')
    toggle.classList.remove('dark-toggle', 'dark-toggle::after')
    displayDivs.forEach(i => i.style.backgroundColor = '#927b9c')
    imgBorder.style.border = '10px solid #927b9c'
    buttons.forEach(i => i.style.backgroundColor = '#e29cbd')
}

function darkMode() {
    document.body.classList.remove('light-theme')
    localStorage.setItem('mode', 'dark')
    toggle.classList.remove('light-toggle', 'light-toggle::after')
    toggle.classList.add('dark-toggle', 'dark-toggle::after')
    displayDivs.forEach(i => i.style.backgroundColor = '#44354A')
    imgBorder.style.border = '10px solid #44354A'
    buttons.forEach(i => i.style.backgroundColor = '#9e4770')
}

//Functions for Local Storage
function saveToLocal() {
    localStorage.setItem('salesArray',JSON.stringify(salesArr))
    localStorage.setItem('achievementsArray',JSON.stringify(achievementsArr))
    localStorage.setItem('revenueArray',JSON.stringify(revenueArr))
    localStorage.setItem('commissionArray',JSON.stringify(commissionArr))
}

function getLocalStorage() {
    JSON.parse(window.localStorage.getItem('salesArray'))
    JSON.parse(window.localStorage.getItem('achievementsArray'))
    JSON.parse(window.localStorage.getItem('revenueArray'))
    JSON.parse(window.localStorage.getItem('commissionArray'))
}

function removeLocal() {
    localStorage.removeItem('salesArray',JSON.stringify(salesArr))
    localStorage.removeItem('achievementsArray',JSON.stringify(achievementsArr))
    localStorage.removeItem('revenueArray',JSON.stringify(revenueArr))
    localStorage.removeItem('commissionArray',JSON.stringify(commissionArr))
}
