//Accessing the DOM
const task = document.getElementById('input-task')
const price = document.getElementById('input-price')
const btnAdd = document.getElementById('btn-add-task')
const invoicesEl = document.getElementById("tasks-container")
const remove = document.getElementById('remove')
const termsEl = document.getElementById("terms")
const invoiceTotalEl = document.getElementById("invoiceTotal")
const btnSendInvoice = document.getElementById("btn-send")

let tasksArr = []

//Event Listeners
btnAdd.addEventListener('click', ()=> {
    addTask()
    renderTasksArr()
    renderInvoiceTotal()
})

btnSendInvoice.addEventListener("click", ()=> {
    tasksArr = []
    task.value = ''
    price.value = 10
    invoicesEl.innerHTML = ''
    invoiceTotalEl.innerText = "$ 0"    
    termsEl.innerHTML = ''
})

//Functions
function addTask() {
    let name = task.value 
    let cost = price.value 
    name.length === 0 ? tasksArr :
        tasksArr.push({name: name, cost: cost, isListed: true, uuid: uuid()})
    task.value = ''
    price.value = 10
}

renderTasksArr()
function renderTasksArr() {
    let html = ''
    tasksArr.forEach((task) => {
        html += `
            <div class="flex-container">
            <h2>${task.name}<span class="remove" id="remove" data-uuid="${task.uuid}">Remove</span></h2>
            <h2><span>$</span> ${task.cost}</h2>
            </div>`
        })
    invoicesEl.innerHTML = html
    tasksArr.length > 0 ? termsEl.innerHTML = 
        `<p class="terms">We accept cash, credit card, or Paypal</p>` :
        termsEl.innerHTML = ''
}

function renderInvoiceTotal() {
    const totalsArr = []
    tasksArr.forEach((task) => {
        totalsArr.push(parseInt(task.cost))
        })
    let invoiceTotal = 0
    totalsArr.length > 0 ? invoiceTotal = totalsArr.reduce(function(a, b){return a + b}) : invoiceTotal
    invoiceTotalEl.innerText = "$ " + invoiceTotal
}

function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c=>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
}

function removeEl(e) {
    e.target.dataset.uuid
    const filteredArr = tasksArr.filter(task => {
        return task.uuid != e.target.dataset.uuid
    })
    tasksArr = filteredArr
    renderTasksArr()
    renderInvoiceTotal()
}

//Custom Event Listener for targeted 'span#remove'
//this works - but I am unsure if there is a better way to do this - any advice appreciated
addCustomEventListener('span#remove', 'click', removeEl)

function addCustomEventListener(selector, event, handler) {
    let rootElement = document.querySelector('body')
    rootElement.addEventListener(event, function (e) {
        let targetElement = e.target
        while (targetElement != null) {
            if(targetElement.matches(selector)) {
                handler(e)
                return
            }
            targetElement = targetElement.parentElement
        }
    },
    true
    )
}




 

