// SELECTING ELEMENTS WE NEED FROM HTML
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const submitButton = document.querySelector("button");
const cardContainer = document.querySelector(".card");

// VARIABLES TO STORE USER DATA ENTERED IN INPUTS
let weight;
let height;

// FUNCTION FOR FOCUS EVENT
function backgroundColorChange(element) {
  element.classList.remove("bg-secondary");
  element.style.backgroundColor = "rgb(60, 60, 60)";
}

function backgroundColorReset(element) {
  element.classList.add("bg-secondary");
  element.style.backgroundColor = "";
}
function appendMessage(message) {
  let row = document.createElement("div");
  cardContainer.appendChild(row);
  row.appendChild(message);
  row.classList.add("row", "justify-content-center");
}

//ATTACHING EVENT LISTENERS TO EACH ELEMENT
weightInput.addEventListener("focus", function () {
  backgroundColorChange(weightInput);
  backgroundColorReset(heightInput);
});
heightInput.addEventListener("focus", function () {
  backgroundColorChange(heightInput);
  backgroundColorReset(weightInput);
});

// REMOVING THE CLASSES IF IT WAS CLICKED ON THE CONTAINER ITSELF
cardContainer.addEventListener("click", function (event) {
  if (event.target === cardContainer) {
    backgroundColorReset(heightInput);
    backgroundColorReset(weightInput);
  }
});

// SUBMIT BUTTON
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  weight = parseFloat(weightInput.value);
  height = parseFloat(heightInput.value);

  // VALIDATION FOR SUBMITION
  if (isNaN(weight) || isNaN(height)) {
    let errorMessage = document.createElement("div");
    errorMessage.textContent = "Please enter some values";
    errorMessage.classList.add("text-center");
    appendMessage(errorMessage);
  } else {
    calculateBMI(weight, height);
  }
});

// BMI IMPLEMENTATION
function calculateBMI(weight, height) {
  height /= 100;
  let resultStr = "";
  let bmi = weight / (height * height);
  if (height !== 0) {
    if (bmi > 25.0) {
      resultStr = `Your BMI is ${bmi.toFixed(
        2
      )} which means you're overweight`;
    } else if (bmi >= 18.5 && bmi < 25) {
      resultStr = `Your BMI is ${bmi.toFixed(
        2
      )} which means you're normal`;
    } else {
      resultStr = `Your BMI is ${bmi.toFixed(
        2
      )} which means you're underweight`;
    }
  } else {
    resultStr = "Your weight or height cannot be 0";
  }
  let resultMessage = document.createElement("div");
  resultMessage.textContent = resultStr;
  resultMessage.classList.add("text-center");
  appendMessage(resultMessage);
}
