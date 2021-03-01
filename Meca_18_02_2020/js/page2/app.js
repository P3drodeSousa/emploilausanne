import {
  scrollFunction,
  support,
  displayProfil,
  displayImpressum,
  closeImpressum,
  deconexion,
} from "../app.js";

window.onload = () => {
  deconexion();
  support();
  displayProfil();
  displayImpressum();
  closeImpressum();
};

window.onscroll = scrollFunction;

const theme = document.querySelectorAll(".profil_thematique");
const option = document.querySelector(".option");
const profilExercice = document.querySelectorAll(".nombreExercice");
const timeExercice = document.querySelectorAll(".timeExercice");
const profilOptions = document.querySelector(".profil_options");
const profilOptionsSpan = document.querySelectorAll(".profil_options span");

function toggleHidden(els) {
  els.forEach((el) => el.classList.toggle("hidden"));
}

theme.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("visible");
  });
});

option.addEventListener("click", () => {
  toggleHidden(profilExercice);
  toggleHidden(timeExercice);
  profilOptionsSpan.forEach((el) => el.classList.toggle("option"));
  profilOptions.classList.toggle("reverse");
});
