


function getCaret(input) {
    if ('selectionStart' in input) {
      // Standard-compliant browsers
      return input.selectionStart;
    } else if(document.selection) {
      input.focus();
      let sel = document.selection.createRange();
      let selLen = document.selection.createRange().text.length;
      sel.moveStart('character', -input.value.length);
      return sel.text.length - selLen;
    }
  }

function setCaret(input, pos) {
    if (input.setSelectionRange) {
      input.focus()
      input.setSelectionRange(pos,pos)
    } else if(input.createTextRange) {
      let range = input.createTextRange();
      range.move('character', pos);
      range.select();
    }
  }
  
  function format_464 (cc) {
    return [cc.substring(0,4),cc.substring(4,10),cc.substring(10,14)].join(' ').trim()
  }

  function format_465 (cc) {
    return [cc.substring(0,4),cc.substring(4,10),cc.substring(10,15)].join(' ').trim()
  }

  function format_4444 (cc) {
    return cc?cc.match(/[0-9]{1,4}/g).join(' '):''
  }

  let CARD_TYPES = [
    {'type':'visa','pattern':/^4/, 'format': format_4444, 'maxlength': 19},
    {'type':'master','pattern':/^(5[12345])|(2[2-7])/, 'format': format_4444, 'maxlength': 16},
    {'type':'amex','pattern':/^3[47]/, 'format': format_465, 'maxlength':15},
    {'type':'jcb','pattern':/^35[2-8]/, 'format': format_465, 'maxlength':19},
    {'type':'maestro','pattern':/^(5018|5020|5038|5893|6304|6759|676[123])/, 'format': format_4444, 'maxlength':19},
    {'type':'discover','pattern':/^6[024]/, 'format': format_4444, 'maxlength':19},
    {'type':'instapayment','pattern':/^63[789]/, 'format': format_4444, 'maxlength':16},
    {'type':'diners_club_carte_blanche','pattern':/^30[0-5]/, 'format': format_464, 'maxlength':14},
    {'type':'diners_club_international','pattern':/^30[0-5]/, 'format': format_464, 'maxlength':14},
    {'type':'diners_club','pattern':/^54/, 'format': format_4444, 'maxlength':16}
  ]

  function formatCardNumber(cc, maxlength) {
    cc = cc.replace(/[^0-9]+/g,'')
  
    for(let i in CARD_TYPES) {
      const ct = CARD_TYPES[i]
      if(cc.match(ct.pattern)) {
        cc = cc.substring(0,ct.maxlength)
        return ct.format(cc)
      }
    }
  
    return format_4444(cc)
    /*
          if(maxlength) {
              cc = cc.substring(0,maxlength)
          }
          if(cc.match(/^3[47]/)) {
              return [cc.substring(0,4),cc.substring(4,10),cc.substring(10,15)].join(' ').trim()
          }
          return cc?cc.match(/.{1,4}/g).join(' '):''
  */
  }
  
function setCreditCardNumber(event) {
    const input = event.target
    const maxlength = input.getAttribute('maxlength')
  
    let oldVal = input.value
    let caretPosition = getCaret(input)
    let beforeCaret = oldVal.substring(0,caretPosition)
    beforeCaret = formatCardNumber(beforeCaret)
    caretPosition = beforeCaret.length
  
    var newValue = formatCardNumber(oldVal, maxlength)
  
    if(oldVal==newValue) return
  
    input.value = newValue
    setCaret(input, caretPosition)
  }
  
export function make_credit_card_input(input) {
    input.addEventListener('input', setCreditCardNumber)
    input.addEventListener('keyup', setCreditCardNumber)
    input.addEventListener('keydown', setCreditCardNumber)
    input.addEventListener('keypress', setCreditCardNumber)
    input.addEventListener('change', setCreditCardNumber)
  }
  
 