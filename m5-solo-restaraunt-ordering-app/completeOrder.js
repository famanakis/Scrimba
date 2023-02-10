import { cardNumberInput, appCheckout, appMenu } from "./index.js"
const payBtn = document.getElementById('pay-btn')
const cardNameInput = document.getElementById('card-name')
const cardCVVInput = document.getElementById('card-cvv')
const paymentModal = document.getElementById('payment-modal')


function handleCompleteOrder() {
    const completeOrderBtn = document.getElementById('btn-purchase')
    completeOrderBtn.addEventListener('click', ()=> {
        paymentModal.classList.remove("hidden-el")
    })
    handlePayAndThankyou()
}

function handlePayAndThankyou() {
    payBtn.addEventListener('click', ()=> {
        if(cardNameInput.value.length >= 1 && 
            cardNumberInput.value.length >= 19 &&
            cardCVVInput.value.length >= 3) {
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
    appMenu.classList.add('non-clickable')
    setTimeout(() => {
        pageRefresh()
    }, 3500)
}

function pageRefresh() {
    appCheckout.innerHTML = ''
    appMenu.classList.remove('non-clickable')
}


// function requiredInput() {
//     let a = cardNameInput.required
//     let b = cardNumberInput.required
//     let c = cardCVVInput.required
// }

export {handleCompleteOrder}