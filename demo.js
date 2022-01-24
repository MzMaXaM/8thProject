let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;
let maximumNumber = document.getElementById('max-chars')

remainingCharsElement.innerText = maxAllowedChars
maximumNumber.innerText = maxAllowedChars

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length; 

  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);

///
//Code bellow wasn't for the challenge I added just for testing
///

let testText = document.querySelector('section h3')
testText.textContent = 'You clicked the button 0 times'
let buttonTest = document.querySelector('section button')
let count = 0;

function testFun(){
  count++
  testText.textContent = `You clicked the button ${count} times`
}

buttonTest.addEventListener('click', testFun)