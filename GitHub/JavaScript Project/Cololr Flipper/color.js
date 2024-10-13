const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Add event listener to the button and assign the getrandom value from the colors array

btn.addEventListener("click", function () {
  let anyColor = "#";
  for (let i = 0; i < 6; i++) {
    anyColor += colors[getRandomColor()];
  }
  document.body.style.backgroundColor = anyColor;
  color.textContent = anyColor;
});

// Generate random color function
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
