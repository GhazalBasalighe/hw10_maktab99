// SELECTING ELEMENTS WE NEED FROM HTML
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const submitButton = document.querySelector("button");

//ATTACHING EVENT LISTENERS TO EACH ELEMENT
weightInput.addEventListener("focus", function () {
  weightInput.classList.remove("bg-secondary");
  weightInput.style.backgroundColor = "rgb(60, 60, 60)";
});
heightInput.addEventListener("focus", function () {
  heightInput.classList.remove("bg-secondary");
  heightInput.style.backgroundColor = "rgb(60, 60, 60)";
});

// REMOVING THE EVENT LISTENERS IF IT WAS CLICKED ON THE CONTAINER ITSELF
