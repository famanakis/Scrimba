// variables to access the DOM
const color = document.getElementById("color-picker")
const scheme = document.getElementById("color-schemes")
const btnGetColor = document.getElementById("btn-get")
const schemeType = document.getElementById("scheme-type")
const colorSection = document.getElementById("color-section")
const hexValues = document.getElementById("hex-values")
const copyModal = document.getElementById("modal-hex-copied")

//Variables
//color picker gets random color on page load
color.value = randomColor()

//Functions
//fetch and render colors from color picker and selection
async function renderColors() {
    const currentColor = color.value.slice(1)
    let currentScheme = scheme.value.toLowerCase() 
    const res = await fetch (`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentScheme}&count=5`)
    const data = await res.json()
    const colorsArr = data.colors    
    colorScheme = colorsArr.map((color)=> {  
        colorSection.innerHTML += `<div class="color-section" style="background:${color.hex.value}">
                                        <button class="color-text" onclick="SelfCopy('${color.hex.value}')">${color.name.value}</button>
                                    </div>`
        hexValues.innerHTML += `<button type="button" id="${color.hex.value}" class="hexText" onclick="SelfCopy('${color.hex.value}')">
                                    <span>${color.hex.value}</span>
                                </button>`
    })                  
}

//generate random seed color on page load
function randomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

//copy text to Clipboard
async function SelfCopy(hexColor) {
    copyModal.textContent = hexColor + " copied"
    copyModal.style.display = 'flex'
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(hexColor)
            copyModal.textContent = hexColor + " copied"
            copyModal.style.display = 'flex'
            setTimeout (()=>(copyModal.style.display = 'none'), 1500)
        } catch (error) {
            deprecatedCopyToClipboard(hexColor)
        }
        } else { //if clipboard API not supported use deprecated CopyToClipboard
        deprecatedCopyToClipboard(hexColor)
    }
}

//deprecated version to work on Scrimba
function deprecatedCopyToClipboard(hexColor) {
    const area = document.createElement('textarea')
    document.body.appendChild(area)
    area.value = hexColor
    area.select()
    document.execCommand('copy')
    document.body.removeChild(area)
}

//Event Listeners
btnGetColor.addEventListener('click', (e)=> {
    e.preventDefault()
    schemeType.textContent = scheme.value.charAt(0).toUpperCase() + scheme.value.slice(1)  
    colorSection.innerHTML = ""
    hexValues.innerHTML = ""
    renderColors()
    })

color.addEventListener('click', (e) => {
    colorSection.innerHTML = ""
    hexValues.innerHTML = ""
    schemeType.textContent = ""  
})


