// variables to access the DOM
const color = document.getElementById("color-picker")
const scheme = document.getElementById("color-schemes")
const btnGetColor = document.getElementById("btn-get")
const colorSection = document.getElementById("color-section")
const hexValues = document.getElementById("hex-values")



// get new color scheme button action
btnGetColor.addEventListener('click', (e)=> {
    e.preventDefault
    colorSection.innerHTML = ""
    hexValues.innerHTML = ""
    renderColors()
    })

// function to render color and hex schemes to page  
function renderColors() {
    const currentColor = color.value.slice(1)
    const currentScheme = scheme.value.toLowerCase() 
       
    fetch (`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentScheme}&count=5`)
        .then(res=> res.json())
        .then(data=> {
            const colorsArr = data.colors      
            const colorScheme = colorsArr.map((i)=> {  
                colorSection.innerHTML += `<div class="color-section" style="background:${i.hex.value}"><span class="space">${i.name.value}</span></div>`
                hexValues.innerHTML += `<button class="hexText" onclick="SelfCopy('${i.hex.value}')" id="${i.hex.value}"><span>${i.hex.value}</span></button>`
                })                  
        }) 
}

// function to generate random seed color on page load
function randomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
color.value = randomColor()


// function to copy text to Clipboard
function SelfCopy(hexColor) {
    const area = document.createElement('textarea')
    document.body.appendChild(area)
    area.value = hexColor
    area.select()
    document.execCommand('copy')
    document.body.removeChild(area)
    alert("Copied " + hexColor + " to Clipboard")
}


// function to copy using navigator -- would need to run first and then change name of textarea function to deprecatedCopyToClipboard
//function SelfCopy(hexColor) {
//    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
//        navigator.clipboard.writeText(hexColor)
//            .then(() => {
//                alert("Copied " + hexColor + " to Clipboard")
//            }, error => { deprecatedCopyToClipboard(hexColor) })
//    } else { // Clipboard API not supported
//        deprecatedCopyToClipboard(hexColor)
//    }
//}



