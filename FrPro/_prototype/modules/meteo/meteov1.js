const answer = document.querySelectorAll(".images");
const container = document.querySelector(".dropZone");
const slider = document.querySelector(".sweet");
const dropZone = document.querySelector(".dropZone");
const slide = document.querySelectorAll(".images");

// Swipper
let isDown = false;
let startX;
let scrollLeft;
let lastSelected;

// SWIPERS EVENTS HANDLERS
const gestureStart = (e, el) => {
  isDown = true;
  startX = e.pageX - el.offsetLeft;
  scrollLeft = el.scrollLeft;
};

const gestureMove = (e, el) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - el.offsetLeft;
  const walk = (x - startX) * 3;
  el.scrollLeft = scrollLeft - walk;
};

const gestureEnd = e => {
  isDown = false;
};

//Slider Events Listeners
slider.addEventListener("mousedown", e => gestureStart(e, slider));
slider.addEventListener("mouseleave", gestureEnd);
slider.addEventListener("mouseup", gestureEnd);
slider.addEventListener("mousemove", e => gestureMove(e, slider));
