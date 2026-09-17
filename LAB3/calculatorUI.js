let displayText = document.getElementById("display");
let buttons = document.querySelectorAll('button[type="button"]')

function calculatorControlInit() {
  console.log(buttons);
  displayText.value = "nidsdsgger";

}

calculatorControlInit()

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
        console.log(button.textContent)
        displayText.value += button.textContent

  }) 
})
