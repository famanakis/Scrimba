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
