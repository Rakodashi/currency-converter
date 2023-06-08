// Select input with the typed number
let typedValue = document.querySelector('#realValue')

// Select the radio elements (make an array)
let selectedCoin = document.getElementsByName('otherCoin')

let warning = document.querySelector('#warning')

// Select buttons
let convertBtn = document.querySelector('#convertBtn')
let cleanBtn = document.querySelector('#cleanBtn')

// Prices day 21/09/2021        // 22/09/2021
let dollarValue   = 5.31        // 5.28
let euroValue     = 6.23        //6.20
let poundValue    = 7.26        // 7.20
let bitcoinValue  = 229762.85   //224115,01 as 14:16 UTC or 11:19
let realValue     = 0

let otherCoin     = ''
let convertedCoin = 0.00

// Formatted message to show monetary values
function formattedMessage(convertedCoin) {
  isNaN(realValue) ? realValue = 0 : ''
  console.log("Converted Currency " + convertedCoin)
  warning.textContent = "The value " + (realValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " converted into " + otherCoin + " is " + convertedCoin
}

//Verify if a value was typed to be able to convert
function blockbtn() {
  if(typedValue.value == 0 || typedValue == '' || typedValue == null) {
    convertBtn.setAttribute('disabled', 'disabled')
    convertBtn.style.background = '#ccc'
    convertBtn.style.cursor = 'not-allowed'
  }
}

// Reactivate button
function activateBtn() {
  if (typedValue.value > 0) {
    convertBtn.removeAttribute('disabled')
    convertBtn.style.background = '#ffc107'
    convertBtn.style.cursor = 'pointer'
  } else {
    console.log('Not activated')
  }
}

// Verify whick radio button is checked or checked == true
// link the verification to an event, click on the Convert button
convertBtn.addEventListener('click', function() {
  // Make the parseFloat of the monetary values (convert String to Float)
  realValue = parseFloat(typedValue.value)

  console.log('choose the other coin')
  for(let i = 0; i < selectedCoin.length; i++) {
    if(selectedCoin[i].checked) {
      otherCoin = selectedCoin[i].value
      console.log(otherCoin)
    }
  }


  switch(otherCoin) {

    case 'Dollar':
      convertedCoin = realValue / dollarValue
      monetarySymbol = 'US$'
      formattedMessage(convertedCoin.toLocaleString('en-US', { style: 'currency', currency: 'USD'}))
    break

    case 'Euro':
      convertedCoin = realValue / euroValue
      monetarySymbol = '€'
      formattedMessage(convertedCoin.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'}))
    break

    case 'Pound':
      convertedCoin = realValue / poundValue
      monetarySymbol = '£'
      formattedMessage(convertedCoin.toLocaleString('en-GB', { style: 'currency', currency: 'GBP'}))
    break

    case 'Bitcoin':
      convertedCoin = realValue / bitcoinValue
      monetarySymbol = '₿'
      formattedMessage(parseFloat(convertedCoin).toFixed(5))
    break

    default:
      warning.textContent = 'Choose a coin to convert to'
  }
  isNaN(convertedCoin) ? convertedCoin = 0 : ''
})

cleanBtn.addEventListener('click', function () {
  typedValue.focus()
  typedValue.value = ''
  warning.textContent = 'Type the value, choose a coin and convert'
  selectedCoin[0].checked = false
  selectedCoin[1].checked = false
  selectedCoin[2].checked = false
  selectedCoin[3].checked = false
})

// function coinSound(e) {
//   const audio = document.querySelector(audio);
//   if (!audio) return; // To stop if not under the right conditions
//   audio.currentTime = 0; // Rewind to start
//   audio.play();
// }