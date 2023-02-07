import {accounts} from "./data.js"

const accountsEl = document.getElementById('container-accounts')
const spendingsEl = document.getElementById('container-spendings')
let initialData = 2

accountsEl.addEventListener('click', (e) => {
    let buttonID = (e.target.getAttribute('data-id') - 1)
    renderSpendings(buttonID)   
})

//Functions 
renderPage()

function renderPage() {
    renderAccounts()
    renderSpendings(initialData) 
}

function renderAccounts() {
    let html = '<p>Accounts</p>' 
    let currency = new Intl.NumberFormat('en-US', {
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

function renderSpendings(data) {
    let html = ''
        let spendingsArr = accounts[data]
        if(data >= 1 || data <= 2) {
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

