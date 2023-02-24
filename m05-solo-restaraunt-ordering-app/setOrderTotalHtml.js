import {menuData} from "./menuData.js"
import {orderArr} from "./index.js"
import {setOrderHtml} from "./setOrderHtml.js"

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
        ${setOrderHtml()}  
        <span class="total flex-row">
            <p class="total-text">Total price:</p>
            <p class="total-price">$${sumOrderArr}</p>
        </span>
        <button id="btn-purchase" class="btn-purchase">Complete order</button>`
    }
    return orderTotalHtml
}
