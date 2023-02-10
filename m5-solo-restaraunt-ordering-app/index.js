import {getMenuHtml} from "./getMenu.js"
import { getCheckoutHtml} from "./getCheckout.js"
import { handleCompleteOrder} from "./completeOrder.js"
import { creditCardInput } from "./creditCard.js"

//Variables
export const orderArr = []
export const appMenu = document.getElementById('menu-div')
export const appCheckout = document.getElementById('checkout-section')
export const cardNumberInput = document.getElementById('card-number')

//Event Listeners
document.addEventListener('click', function(e){ 
    e.preventDefault()  
    if(e.target.dataset.uuid){
        orderArr.push(e.target.dataset.uuid)
        renderCheckout()
        handleCompleteOrder()
    }
    if(e.target.dataset.remove){
        orderArr.splice(orderArr.indexOf(e.target.dataset.remove),1)
        renderCheckout()
        if(orderArr.length >=1) {
            handleCompleteOrder()
        }
    }
})

//Functions
renderMenu()

function renderMenu(){
    appMenu.innerHTML =  getMenuHtml()
}

renderCheckout()

function renderCheckout() {
    appCheckout.innerHTML = getCheckoutHtml()
}

creditCardInput(cardNumberInput)

export {renderCheckout}
