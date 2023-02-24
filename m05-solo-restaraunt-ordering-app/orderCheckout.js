import {cardNumberInput, appCheckout, appMenu} from "./index.js"
const payBtn = document.getElementById('pay-btn')
const cardNameInput = document.getElementById('card-name')
const cardCVVInput = document.getElementById('card-cvv')
const paymentModal = document.getElementById('payment-modal')

export function orderCheckout() {
    const completeOrderBtn = document.getElementById('btn-purchase')
    completeOrderBtn.addEventListener('click', ()=> {
        paymentModal.classList.remove("hidden-el")
    })
    handlePayAndThankyou()
}

function handlePayAndThankyou() {
    const requiredInfoDiv = document.getElementById('required-cc-info')
    payBtn.addEventListener('click', ()=> {
        if(cardNameInput.value.length >= 1 && cardNumberInput.value.length >= 19 && cardCVVInput.value.length >= 3) {
            paymentModal.classList.add("hidden-el")
            renderThankyou() 
            } else {
                if(cardNumberInput.value.length >= 19 && cardCVVInput.value.length >= 3) {
                    requiredInfoDiv.innerHTML = `Cardholder Name Required`
                } else if(cardNameInput.value.length >= 1 && cardCVVInput.value.length >= 3) {
                    requiredInfoDiv.innerHTML = `Card Number Required`
                } else if(cardNameInput.value.length >= 1 && cardNumberInput.value.length >= 19) {
                    requiredInfoDiv.innerHTML = `CVV Required`
                } else if(cardCVVInput.value.length >= 3) {
                    requiredInfoDiv.innerHTML = `Cardholder Name and Card Number Required`
                } else if(cardNumberInput.value.length >= 19 ) {
                    requiredInfoDiv.innerHTML = `Cardholder Name and CVV Required`
                } else if(cardNameInput.value.length >= 1 ) {
                    requiredInfoDiv.innerHTML = `Card Number and CVV Required`
                } else {
                    requiredInfoDiv.innerHTML = `Please Fill in All Requested Fields`
                }
            }
    })
}

function renderThankyou() {
    const cardName = cardNameInput.value
    appCheckout.innerHTML = `
        <div class="thanks">
            <p class="thanks-text">Thanks, ${cardName}! Your order is on its way!</p>
        </div>
          `
    document.querySelector('p.ratings-text').classList.remove("hidden-el")
    document.querySelector('div.rating').classList.remove("hidden-el")
    appMenu.classList.add('non-clickable')
}




