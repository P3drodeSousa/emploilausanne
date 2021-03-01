const svgContainer = document.querySelector(".svgContainer");
const svg = document.querySelector("#swissMap");
const slider = document.querySelector(".items");
const slide = document.querySelectorAll(".item");
const paths = document.querySelectorAll("path");

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

// SVG EVENT HANDLERS
// HELPER FUNCTIONS

const renderWidth = size => {
  if (size < 150) {
    return 160;
  }
  return size;
};

// const position = el => el.getBoundingClientRect();
const position = el => el.getBBox();

//CREATE ELEMENT SPAN
const createSpan = () => {
  const span = document.createElement("span");
  return span;
};

const createDiv = (path, position) => {
  const info = document.createElement("div");
  const meteo = document.createElement("div");
  const span = createSpan(path.getAttribute("title"));

  renderWidth(position.heigth);

  //Container
  info.style.width = `${renderWidth(position.width)}px`;
  info.style.height = `${renderWidth(position.height)}px`;

  info.classList.add("newEl");

  meteo.classList.add("meteo");
  info.append(meteo);
  info.append(span);

  return info;
};

const createForeignObject = path => {
  const { x, y } = position(path);
  const info = createDiv(path, position);

  const useElem = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );

  useElem.setAttributeNS(null, "x", x);
  useElem.setAttributeNS(null, "y", y);

  useElem.setAttributeNS(null, "width", renderWidth(position(path).width));
  useElem.setAttributeNS(null, "height", renderWidth(position(path).height));

  useElem.append(info);

  svg.appendChild(useElem);
};

const updateForeignObject = (el, id) => {
  const { x, y } = position(id);
  el[0].setAttributeNS(null, "x", x);
  el[0].setAttributeNS(null, "y", y);
  el[0].setAttributeNS(null, "width", renderWidth(position(id).width));
  el[0].setAttributeNS(null, "height", renderWidth(position(id).height));
};

const cityName = el => {
  document.querySelector(".newEl span").innerText = el.getAttribute("title");
};

const renderBkgImg = meteo => {
  document.querySelector(
    ".meteo"
  ).style.backgroundImage = `url('/images/modules/meteo/${meteo}.svg')`;
};

const hightlightPath = id => {
  if (lastSelected) {
    lastSelected.style.fill = "white";
    lastSelected.style.stroke = "#ABD1FF";
    lastSelected.style.strokeWidth = "1";
  }

  id.style.fill = "#EBF3FF";
  id.style.stroke = "#003682";
  id.style.strokeWidth = "3";

  id.scrollIntoView({
    block: "center",
    inline: "center",
    behavior: "smooth"
  });

  const legend = document.getElementsByTagName("foreignObject");

  !legend.length ? createForeignObject(id) : updateForeignObject(legend, id);

  cityName(id);
};

// Item Events Listeners
slide.forEach(el => {
  el.addEventListener("click", e => {
    const pathSelected = document.getElementById(e.target.id);

    hightlightPath(pathSelected);

    renderBkgImg(e.target.dataset.meteo);

    lastSelected = pathSelected;

    slide.forEach(el => {
      el.classList.remove("selected");
    });

    e.target.classList.toggle("selected");
  });
});

//Slider Events Listeners
slider.addEventListener("mousedown", e => gestureStart(e, slider));
slider.addEventListener("mouseleave", gestureEnd);
slider.addEventListener("mouseup", gestureEnd);
slider.addEventListener("mousemove", e => gestureMove(e, slider));

//SVG EVENT LISTENERS
svgContainer.addEventListener("mousedown", e => gestureStart(e, svgContainer));
svgContainer.addEventListener("mouseleave", gestureEnd);
svgContainer.addEventListener("mouseup", gestureEnd);
svgContainer.addEventListener("mousemove", e => gestureMove(e, svgContainer));
