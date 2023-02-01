import {menuData} from "./data.js"
import { orderArr} from "./index.js"

function getCheckoutHtml() {
    orderArrTotal()
    let checkoutHtml = ''
    if(orderArr.length >=1) {
        checkoutHtml += `
        <p class="your-order">Your order</p>   
        ${renderOrderArr()}  
        <span class="total flex-row">
            <p class="total-text">Total price:</p>
            <p class="total-price">$${sumOrderArr}</p>
        </span>
        <button id="btn-purchase" class="btn-purchase">Complete order</button>`
    }
    return checkoutHtml
}

function renderOrderArr() {
    let orderHtml = '' 
    orderArr.forEach(function(uuid){
        menuData.forEach(function(item){
            if(item.uuid === uuid){
                orderHtml += `
                <div class="order-subtotal flex-row">
                <div class="flex-row">
                    <p class="list-item">${item.name}</p>
                    <button id="remove=item" 
                    class="remove-btn"
                    data-remove="${item.uuid}">remove</button>
                </div>
                <p class="list-total">$${item.price}</p>
                </div>`
            }
        })  
    })
    return orderHtml
}


let sumOrderArr =[]
function orderArrTotal() {
    let orderTotalArr = []
    orderArr.forEach((uuid)=>{
        menuData.forEach((item)=>{
            if(item.uuid === uuid){
                orderTotalArr.push(item.price)
            }
        })
    })
    return sumOrderArr = orderTotalArr.reduce((partialSum, a) => partialSum + a, 0)
}


export {getCheckoutHtml, renderOrderArr}

