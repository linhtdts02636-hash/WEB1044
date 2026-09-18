let displayText = document.getElementById("display");
const numButtons = document.querySelectorAll('button[class="number"]');
const equalButton = document.querySelector('button[class="equals"]');
const clearButton = document.querySelector('button[class="clear"]');
let isError = false;
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(button.textContent);
    if (isError) {
      isError = false;
      displayText.value = "";
    }
    displayText.value += button.textContent;
  });
});

equalButton.addEventListener("click", (event) => {
  if (isError) {
    isError = false;
    displayText.value = "";
  }
  calculate(displayText.value);
});

clearButton.addEventListener("click", (event) => {
  if (isError) {
    isError = false;
  }
  displayText.value = "";
});

function calculate(input) {
  try {
    input = eval(input);
    if(Number.isFinite(input)) {
      displayText.value = input;
    } else {
      throw new Error("invalid calculation")
    }
  } catch (e) {
    displayText.value = e.message
    isError = true;
  }
}
