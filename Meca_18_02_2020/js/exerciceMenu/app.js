import { setText, speak } from "../lib/speak/app.js";

const lvl = document.querySelectorAll("#niveaux");
const number = document.querySelectorAll("#number");
const time = document.querySelectorAll("#durée");
const title = document.querySelector(".exercice_title");
const titleValid = document.querySelector("#valid");
const modal = document.querySelector(".modal");
const aide = document.querySelector(".aide");
const close = document.querySelectorAll("#close");

aide.addEventListener("click", displayModal);

/* Display modal */
function displayModal() {
  modal.style.display = "block";
}

//Close Modal
close.forEach((el) => {
  el.addEventListener("click", closeModal);
});

function closeModal() {
  modal.style.display = "none";
}

let valid = {
  number: false,
  niveaux: false,
  durée: false,
};

function handleClick(e) {
  localStorage.setItem(e.target.id, e.target.getAttribute("value"));

  valid = {
    ...valid,
    [e.target.id]: true,
  };

  document.querySelectorAll(`#${e.srcElement.id}`).forEach((child) => {
    child.style.background = "#5e8fb9";
    child.classList.remove("selected");
  });
  e.target.style.background = "#f5c800";
  e.target.classList.toggle("selected");
}

lvl.forEach((level) => {
  level.addEventListener("click", (e) => handleClick(e));
});

number.forEach((el) => {
  el.addEventListener("click", (e) => handleClick(e));
});

time.forEach((el) => {
  el.addEventListener("click", (e) => handleClick(e));
});

function validate() {
  document.querySelectorAll(`h3`).forEach((el) => {
    el.style.color = "var(--text)";
  });

  let erreur = 0;

  if (!valid.number || !valid.durée || !valid.niveaux) {
    Object.keys(valid).forEach((key) => {
      document.querySelectorAll(`#${key}`).forEach((el) => {
        el.style.border = "none";
      });
      if (!valid[key]) {
        erreur = ++erreur;
        document.querySelector(`h3.${key}`).style.color = "#ce0000";
        document.querySelectorAll(`#${key}`).forEach((el) => {
          el.style.border = "2px solid #ce0000";
        });
      }
    });
    const vos = erreur === 1 ? "votre" : "vos";

    return (titleValid.innerText = `Veuillez préciser ${vos} choix`);
  }
  window.location = "exercice1.html";
}

// document.querySelector("#exercice").addEventListener("click", validate);
// document.querySelector("#exercice").disabled = true;
document.querySelector("#exercice").addEventListener("click", validate);

const getTitle = () => {
  localStorage.setItem("number", "");
  localStorage.setItem("niveaux", "");
  localStorage.setItem("durée", "");
  title.innerText = localStorage.getItem("exercice");
};

/* Inactivity 10s user did nothing on the page (clicked, scroll, etc)*/
// function logout() {
//   aide.style.display = "flex";
// }

// let timeup;

// function resetTimer() {
//   clearTimeout(timeup);
//   timeup = setTimeout(logout, 10000);
//   // 1000 milliseconds = 1 second
// }

// let events = [
//   "mousedown",
//   "mousemove",
//   "keypress",
//   "scroll",
//   "touchstart",
//   "click",
// ];
// events.forEach(function (name) {
//   document.addEventListener(name, resetTimer);
// });

document.querySelector(".enonce").addEventListener("click", speak);

const listen = document.querySelector("#listen");

window.addEventListener("load", () => {
  // resetTimer();
  getTitle();
  setText(listen.innerText);
});
