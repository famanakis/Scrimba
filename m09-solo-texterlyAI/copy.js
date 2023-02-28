export async function selfCopy(text) {
    const copied = document.getElementById('copied')
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text)
            copied.style.visibility = 'visible'
            setTimeout (()=>(copied.style.visibility = 'hidden'), 2500)
        } catch (error) { //if error then use deprecated CopyToClipboard
            copyToClipboard(text)
        }
    } else { //if clipboard API not supported use deprecated CopyToClipboard
            copyToClipboard(text)
    }
}

//deprecated copy to clipboard
function copyToClipboard(text) {
    copied.style.visibility = 'visible'
    setTimeout (()=>(copied.style.visibility = 'hidden'), 2500)
    const area = document.createElement('textarea')
    document.body.appendChild(area)
    area.value = text
    area.select()
    document.execCommand('copy')
}

