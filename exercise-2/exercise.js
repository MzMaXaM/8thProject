// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
let firstButton = document.querySelector('section button')
//    - Select the second button by using an "id"
let secondButton = document.getElementById('buttonWithId')
// 2) Add "click" event listener to both buttons (with two different functions).
firstButton.addEventListener('click', removeUsingClass )
secondButton.addEventListener('click', addBlueUsingClass )
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function usingVariable(){
  // console.dir(firstButton)
  secondParagraph.innerHTML = ''
}
//    - Output the second button WITHOUT using the variable in which it's stored
function withoutVariable(){
  // let buttons = document.querySelectorAll('button')
  // console.dir(buttons[1])
  firstParagraph.style.backgroundColor = 'lightBlue'
}
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
let firstParagraph = document.body.children[2].children[1]
let secondParagraph = document.body.children[2].children[3]
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
// DONE
//    - The second button changes the background color of the first paragraph to blue
// DONE
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function removeUsingClass(){
  secondParagraph.classList.toggle('delete')
  if(firstButton.innerText=='Remove Paragraph'){
    firstButton.innerText = 'Undo Remove Paragraph'
  }else{
    firstButton.innerText = 'Remove Paragraph'
  }
}
function addBlueUsingClass(){
  firstParagraph.classList.toggle('blue')
  if(secondButton.innerText=='Add Blue Background Color'){
    secondButton.innerText = 'Remove Blue Background Color'
  }else{
    secondButton.innerText = 'Add Blue Background Color'
  }
}