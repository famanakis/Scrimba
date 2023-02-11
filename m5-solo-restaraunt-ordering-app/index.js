import {getMenuHtml} from "./getMenu.js"
import {getOrderTotalHtml} from "./getOrderTotal.js"
import {orderCheckout} from "./getOrderCheckout.js"
import {creditCardInput } from "./creditCard.js"
import {handleRating} from "./ratingsStars.js"

//Variables
export const orderArr = []
export const appMenu = document.getElementById('menu-div')
export const appCheckout = document.getElementById('checkout-section')
export const cardNumberInput = document.getElementById('card-number')
export const ratingStars = [...document.getElementsByClassName("rating-star")]

//Event Listeners
document.addEventListener('click', function(e){ 
    e.preventDefault()  
    if(e.target.dataset.uuid){
        orderArr.push(e.target.dataset.uuid)
        renderCheckout()
        orderCheckout()
    }
    if(e.target.dataset.remove){
        orderArr.splice(orderArr.indexOf(e.target.dataset.remove),1)
        renderCheckout()
        if(orderArr.length >=1) {
            orderCheckout()
        }
    }
})

//Functions
renderMenu()

function renderMenu(){
    appMenu.innerHTML =  getMenuHtml()
}

renderCheckout()

export function renderCheckout() {
    appCheckout.innerHTML = getOrderTotalHtml()
}

creditCardInput(cardNumberInput)

handleRating(ratingStars)

function orderDiscount() {
    //if orderArr has 1 entree and 1 side then add free soda
    //if orderArr has 1 entrees and 2 sides than add 1 free sodas
}

 