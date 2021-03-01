const numbers = document.querySelectorAll(".number");

let selected;

function handleClick(e) {
  if (selected) selected.classList.remove("selected");
  selected = e.target;
  e.target.classList.add("selected");
}

numbers.forEach(el => {
  el.addEventListener("click", handleClick);
});
