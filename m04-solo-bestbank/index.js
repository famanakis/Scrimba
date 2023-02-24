import {accounts} from "./data.js"

const accountsEl = document.getElementById('container-accounts')
const spendingsEl = document.getElementById('container-spendings')

accountsEl.addEventListener('click', (e) => {
    const buttonID = (e.target.getAttribute('data-id') - 1)
    renderSpendings(buttonID)   
})

//Functions 
renderPage()

function renderPage() {
    renderAccounts()
    renderSpendings(spendingsArr.spendings.length) 
}

function renderAccounts() {
    let html = '<p>Accounts</p>' 
    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    accounts.forEach(i => {
        html += `
        <button type="button" class="btn-acct" data-id="${i.id}">
            <p data-id="${i.id}">${i.title}</p>
            <p data-id="${i.id}">${currency.format(i.balance)}</p>
        </button>`
    })
    accountsEl.innerHTML = html
}

function renderSpendings(index) {
    let html = ''
    let spendingsArr = accounts[index]
    if(spendingsArr.spendings.length != 0) {
        spendingsArr.spendings.forEach(i => {
                html += `
                <li class="spendings">
                    <p>${i.category}</p>
                    <p>$${i.spent}</p>
                </li>`
        })  
        spendingsEl.innerHTML = `
            <p>Spendings</p>
            <ul class="spendings-list">${html}</ul>`
    } else {
        spendingsEl.innerHTML = `
        <p>Spendings</p>`
    } 
}

