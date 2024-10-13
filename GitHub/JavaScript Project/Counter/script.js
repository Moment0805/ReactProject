let count = 0;

//declare variables to access the value and btn class properties
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//add event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const button = e.currentTarget.classList;
    // check if the button clicked is to be incremented or not using the if else statement
    if (button.contains("increase")) {
      value.textContent = parseInt(value.textContent) + 1;
      count++;
    }
    if (button.contains("decrease")) {
      value.textContent = parseInt(value.textContent) - 1;
      count--;
    }
    if (button.contains("reset")) {
      value.textContent = 0;
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
