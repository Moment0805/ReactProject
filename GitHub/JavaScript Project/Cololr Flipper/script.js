const colors = ["red", "green", "blue", "yellow", "#f1f3f5"];
// declare a variable to get the btn to click

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Add event listener to the button and assign the getrandom value from the colors array

btn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
