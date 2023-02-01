import {getMenuHtml} from "./getMenu.js"
import { getCheckoutHtml, renderOrderArr} from "./getCheckout.js"
import { menuData} from "./data.js"
import { handleCompleteOrder} from "./completeOrder.js"
import { make_credit_card_input } from "./creditCard.js"

//Variables
export const orderArr = []

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

make_credit_card_input(document.getElementById("card-number"));


//Functions that Render to the Page
function renderMenu(){
    document.getElementById('menu-div').innerHTML =  getMenuHtml()
}
renderMenu()


export function renderCheckout() {
    document.getElementById('checkout-section').innerHTML = getCheckoutHtml()
}
renderCheckout()


