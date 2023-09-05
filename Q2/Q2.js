// SELECTING ELEMENTS WE NEED FROM HTML
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const submitButton = document.querySelector("button");
const cardContainer = document.querySelector(".card");

// FUNCTION FOR FOCUS EVENT
function backgroundColorChange(element) {
  element.classList.remove("bg-secondary");
  element.style.backgroundColor = "rgb(60, 60, 60)";
}

function backgroundColorReset(element) {
  element.classList.add("bg-secondary");
  element.style.backgroundColor = "";
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
