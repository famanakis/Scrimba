
function handleCompleteOrder() {
    const completeOrderBtn = document.getElementById('btn-purchase')
    completeOrderBtn.addEventListener('click', function(){
    document.getElementById('payment-modal').classList.remove("hidden-el")
    })
    handlePayAndThankyou()
}

function handlePayAndThankyou() {
    const payBtn = document.getElementById('pay-btn')
    payBtn.addEventListener('click', ()=>{
        if(document.getElementById('card-name').value.length >= 1 && 
            document.getElementById('card-number').value.length >= 19 &&
            document.getElementById('card-cvv').value.length >= 3) {
                document.getElementById('payment-modal').classList.add("hidden-el")
                renderThankyou()
        } else {
            if(document.getElementById('card-number').value.length >= 19 &&
                document.getElementById('card-cvv').value.length >= 3) {
                alert('Oops - We are missing some information!\nPlease fill in your Name.')
            } else if(document.getElementById('card-name').value.length >= 1 && 
                    document.getElementById('card-cvv').value.length >= 3) {
                alert('Oops - We are missing some information!\nPlease fill in your Card Number.')
            } else if(document.getElementById('card-name').value.length >= 1 && 
                    document.getElementById('card-number').value.length >= 19) {
                alert('Oops - We are missing some information!\nPlease fill in the card CVV.')
            } else if(document.getElementById('card-cvv').value.length >= 3) {
                alert('Oops - We are missing some information!\nPlease fill in your Name and Card Number.')
            } else if(document.getElementById('card-number').value.length >= 19 ) {
                alert('Oops - We are missing some information!\nPlease fill in your Name and the CVV.')
            } else if(document.getElementById('card-name').value.length >= 1 ) {
                alert('Oops - We are missing some information!\nPlease fill in your Card Number and the CVV.')
            } else {
                alert('Oops - We are missing some information!\nPlease fill in all requested fields.')
            }
        }
    })
}

function renderThankyou() {
    let cardName = document.getElementById("card-name").value
    document.getElementById('checkout-section').innerHTML = `
        <div class="thanks">
            <p class="thanks-text">Thanks, ${cardName}! Your order is on its way!</p>
        </div>
        `
    document.getElementById('menu-div').classList.add('non-clickable')
    setTimeout(()=>{document.location.reload()}, 3500)
}

function requiredInput() {
    let a = document.getElementById('card-name').required
    let b = document.getElementById('card-number').required
    let c = document.getElementById('card-cvv').required
}

export {handleCompleteOrder}