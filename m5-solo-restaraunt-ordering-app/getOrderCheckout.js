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
    payBtn.addEventListener('click', ()=> {
        if(cardNameInput.value.length >= 1 && cardNumberInput.value.length >= 19 && cardCVVInput.value.length >= 3) {
            paymentModal.classList.add("hidden-el")
            renderThankyou()
            } else {
                if(cardNumberInput.value.length >= 19 &&
                    cardCVVInput.value.length >= 3) {
                    alert('Oops - We are missing some information!\nPlease fill in your Name.')
                } else if(cardNameInput.value.length >= 1 && 
                        cardCVVInput.value.length >= 3) {
                    alert('Oops - We are missing some information!\nPlease fill in your Card Number.')
                } else if(cardNameInput.value.length >= 1 && 
                        cardNumberInput.value.length >= 19) {
                    alert('Oops - We are missing some information!\nPlease fill in the card CVV.')
                } else if(cardCVVInput.value.length >= 3) {
                    alert('Oops - We are missing some information!\nPlease fill in your Name and Card Number.')
                } else if(cardNumberInput.value.length >= 19 ) {
                    alert('Oops - We are missing some information!\nPlease fill in your Name and the CVV.')
                } else if(cardNameInput.value.length >= 1 ) {
                    alert('Oops - We are missing some information!\nPlease fill in your Card Number and the CVV.')
                } else {
                    alert('Oops - We are missing some information!\nPlease fill in all requested fields.')
                }
            }
    })
}

function renderThankyou() {
    let cardName = cardNameInput.value
    appCheckout.innerHTML = `
        <div class="thanks">
            <p class="thanks-text">Thanks, ${cardName}! Your order is on its way!</p>
        </div>
          `
    document.querySelector('p.ratings-text').classList.remove("hidden-el")
    document.querySelector('div.rating').classList.remove("hidden-el")
    appMenu.classList.add('non-clickable')
}



