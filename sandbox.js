//set initial count
let count = 0;

//values and buttons
const span = document.querySelector("#span");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const counting = e.currentTarget.classList;
    if (counting.contains("decrease")) {
      count--;
    } else if (counting.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      span.style.color = "blue";
    } else if (count < 0) {
      span.style.color = "red";
    } else {
      span.style.color = "black";
    }

    span.textContent = count;
  });
});
