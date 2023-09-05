// SELECTING ELEMENTS WE NEED FROM HTML
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const submitButton = document.querySelector("button");

// FUNCTION FOR FOCUS EVENT
function backgroundColorChange(element) {
  element.classList.remove("bg-secondary");
  element.style.backgroundColor = "rgb(60, 60, 60)";
}

//ATTACHING EVENT LISTENERS TO EACH ELEMENT
weightInput.addEventListener("focus", function () {
  backgroundColorChange(weightInput);
  heightInput.classList.add("bg-secondary");
  heightInput.style.backgroundColor = "";
});
heightInput.addEventListener("focus", function () {
  backgroundColorChange(heightInput);
  weightInput.classList.add("bg-secondary");
  weightInput.style.backgroundColor = "";
});

// REMOVING THE EVENT LISTENERS IF IT WAS CLICKED ON THE CONTAINER ITSELF
