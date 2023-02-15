import {setMenuHtml} from "./setMenuHtml.js"
import {setOrderTotalHtml} from "./setOrderTotalHtml.js"
import {orderCheckout} from "./orderCheckout.js"
import {creditCardInput } from "./creditCard.js"
import {handleRating} from "./ratingsStars.js"

//Variables
export let orderArr = []
export const appMenu = document.getElementById('menu-div')
export const appCheckout = document.getElementById('checkout-section')
export const cardNumberInput = document.getElementById('card-number')
export const ratingStars = [...document.getElementsByClassName("rating-star")]

//Main Functions 
renderMenu()
function renderMenu(){
    appMenu.innerHTML =  setMenuHtml()
}

renderCheckout()
function renderCheckout() {
    appCheckout.innerHTML = setOrderTotalHtml()
}

//Give each line item a unique ID when item is pushed to the orderArr
function uid(){
    return String(
        Date.now().toString(32) +
          Math.random().toString(16)
      ).replace(/\./g, '')
}

//Format CC Number input in modal
creditCardInput(cardNumberInput)

//UI with Stars for Rating the App
handleRating(ratingStars)

//Event Listeners
document.addEventListener('click', function(e){ 
    e.preventDefault()  
    //Add menu item to the order
    if(e.target.dataset.uuid){
        orderArr.push({id: uid(), uuid: e.target.dataset.uuid})
        renderCheckout()
        orderCheckout()
    }
    //Delete menu item from the order
    if(e.target.dataset.remove){
        orderArr = orderArr.filter(obj => obj.id != e.target.dataset.remove)
        renderCheckout()
        orderArr.length > 0 ? orderCheckout() : ''
    }
    //Exit modal 
    if(e.target.dataset.exit){
        document.getElementById('payment-modal').classList.add('hidden-el')
    }
})
  