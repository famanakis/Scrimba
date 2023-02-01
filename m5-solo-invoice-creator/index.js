//Button Elements//
const btnCar = document.getElementById("btn-car");
const btnLawn = document.getElementById("btn-lawn");
const btnWeeds = document.getElementById("btn-weeds");
const btnSendInvoice = document.getElementById("btn-send");
//Accessing the DOM//
const invoiceContainer = document.getElementById("services-container");
const taskEl = document.getElementById("taskEl");
const totalEl = document.getElementById("totalEl");
const termsEl = document.getElementById("terms");
const invoiceTotal = document.getElementById("invoiceTotal");
//Variables and Arrays//
const serviceArray = [];
const totalArray = [];
let invoice = 0;


//Onclick Wash Car Button does this...   
btnCar.addEventListener("click", function() {
    serviceArray.push("Wash Car");
    totalArray.push(10);   
    invoice +=10;
    invoiceContainer.innerHTML += `
        <div class="flex-container" id="car">
        <h2 id="taskEl">Wash Car<span class="remove less-margin" onclick="removeCar()">Remove</span></h2>
        <h2 id="totalEl" class="less-margin"><span class="less">$</span> 10</h2>
        </div>`;
    termsEl.innerHTML = `
        <p>We accept cash, credit card or Paypal</p>`;
    renderTotalAmount();
    btnCar.disabled = true; 
});

//Onclick Mow Lawn Button does this...
btnLawn.addEventListener("click", function() {
    serviceArray.push("Mow Lawn");
    totalArray.push(20);   
    invoice +=20;
    invoiceContainer.innerHTML += `
        <div class="flex-container" id="mow">
        <h2 id="taskEl">Mow Lawn<span class="remove" onclick="removeLawn()">Remove</span></h2>
        <h2 id="totalEl" class="less-margin"><span class="less">$</span> 20</h2>
        </div>`;
    termsEl.innerHTML = `
        <p>We accept cash, credit card or Paypal</p>`;
    renderTotalAmount();
    btnLawn.disabled = true;
});

//Onclick Pull Weeds Button does this... 
btnWeeds.addEventListener("click", function() {
    totalArray.push(30);  
    serviceArray.push("Pull Weeds"); 
    invoice +=30;
    invoiceContainer.innerHTML += `
        <div class="flex-container" id="pull">
        <h2 id="taskEl">Pull Weeds<span class="remove" onclick="removeWeeds()">Remove</span></h2>
        <h2 id="totalEl" class="less-margin"><span class="less">$</span> 30</h2>
        </div>`;
    termsEl.innerHTML = `
        <p>We accept cash, credit card or Paypal</p>`;
    renderTotalAmount();
    btnWeeds.disabled = true;
});

//Render and/or update Invoice Total to DOM
function renderTotalAmount() {
    invoiceTotal.innerText = "$ " + invoice;
    };


//Send Button - currently reloads the page
btnSendInvoice.addEventListener("click", 
    function sendInvoice() {
        location.reload();
        }
    );


//Functions to Remove items from DOM:
//     Also Re-enables Service Button, Updates Invoice Total and Updates the Arrays//

//Remove Car Wash from the Dom and the Arrays
function removeCar() {
    const removeCarEl = document.getElementById("car");
    removeCarEl.remove();
    invoice -= 10;
    renderTotalAmount();
    btnCar.disabled = false;
    for (let i=0; i<totalArray.length; i++) {
        if (totalArray[i] === 10) {
            totalArray.splice(i,1);
        }
    };
    for (let k=0; k<serviceArray.length; k++) {
        if (serviceArray[k] === "Wash Car") {
            serviceArray.splice(k,1);
        }
        if (serviceArray.length === 0) {
            termsEl.innerHTML = `
            <p></p>`; 
        }
    };    
};

//Remove Mow Lawn from the Dom and the Arrays
function removeLawn() {
    const removeMowEl = document.getElementById("mow");
    removeMowEl.remove();
    invoice -= 20;
    renderTotalAmount();
    btnLawn.disabled = false;
    for (let i=0; i<totalArray.length; i++) {
        if (totalArray[i] === 20) {
            totalArray.splice(i,1);
        }
    };
    for (let k=0; k<serviceArray.length; k++) {
        if (serviceArray[k] === "Mow Lawn") {
            serviceArray.splice(k,1);
        }
        if (serviceArray.length === 0) {
            termsEl.innerHTML = `
            <p></p>`; 
        }
    };    
};

//Remove Pull Weeds from the Dom and the Arrays
function removeWeeds() {
    const removePullEl = document.getElementById("pull");
    removePullEl.remove();
    invoice -= 30;
    renderTotalAmount();
    btnWeeds.disabled = false;
    for (let i=0; i<totalArray.length; i++) {
        if (totalArray[i] === 30) {
            totalArray.splice(i,1);
        }
    };
    for (let k=0; k<serviceArray.length; k++) {
        if (serviceArray[k] === "Pull Weeds") {
            serviceArray.splice(k,1);
        }
        if (serviceArray.length === 0) {
            termsEl.innerHTML = `
            <p></p>`; 
        }
    };    
};
 
 
