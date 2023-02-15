import {menuData} from "./menuData.js"
import {orderArr} from "./index.js"


//Render Line Items to the Page
export function renderOrderArr() {
    //Render Array of Items Ordered to Page
    let orderHtml = '' 
    orderArr.forEach(obj => {  
        menuData.forEach(item => {
            if(item.uuid === obj.uuid) {
                orderHtml += `
                <div class="order-subtotal flex-row">
                <div class="flex-row">
                    <p class="list-item">${item.name}</p>
                    <button id="remove=item" 
                    class="remove-btn"
                    data-remove="${obj.id}">remove</button>
                </div>
                <p class="list-total">$${item.price}</p>
                </div>`
            }
        })
    })
    //Meal Deal Conditional Rendering to Page
    const entreeArr = []
    const sideArr = []
        orderArr.forEach((obj => {
            menuData.forEach(item=> {
                if(item.uuid === obj.uuid){
                if(item.category === 'entree') {
                    entreeArr.push(item.category) 
                } else if(item.category === 'side') {
                    sideArr.push(item.category)
                }               
            }
        })
    }))       
    if(entreeArr.length >= 2 && sideArr.length >= 2) {
        orderHtml += `
            <div class="order-subtotal flex-row">
                <div class="flex-row">
                    <p class="list-item">Meal Deal Soda</p>
                </div>
                <p class="list-total free">FREE</p>
            </div>
            <div class="order-subtotal flex-row">
            <div class="flex-row">
                <p class="list-item">Meal Deal Soda</p>
            </div>
            <p class="list-total free">FREE</p>
            </div>`
    } else if (entreeArr.length >= 1 && sideArr.length >= 1) {
        orderHtml += `
            <div class="order-subtotal flex-row">
                <div class="flex-row">
                    <p class="list-item">Meal Deal Soda</p>
                </div>
                <p class="list-total free">FREE</p>
            </div>`
    } 
    return orderHtml
}

//Render Order Grand Total to Page
export function setOrderTotalHtml() {
    const orderTotalArr = []
    orderArr.forEach(obj => {  
        menuData.forEach(item => {
            if(item.uuid === obj.uuid){
                orderTotalArr.push(item.price)
            }
        })
    })
    const sumOrderArr = orderTotalArr.reduce((partialSum, a) => partialSum + a, 0)
    let orderTotalHtml = ''
    if(orderArr.length >=1) {
        orderTotalHtml += `
        <p class="your-order">Your order</p>   
        ${renderOrderArr()}  
        <span class="total flex-row">
            <p class="total-text">Total price:</p>
            <p class="total-price">$${sumOrderArr}</p>
        </span>
        <button id="btn-purchase" class="btn-purchase">Complete order</button>`
    }
    return orderTotalHtml
}
