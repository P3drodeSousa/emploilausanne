/*Header Resize on Scroll */
export const scrollFunction = () => {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.querySelector("header").style.height = "60px";
    if (document.querySelector(".router")) {
      document.querySelector(".router").style.top = "60px";
    }
  } else {
    document.querySelector("header").style.height = "95px";
    if (document.querySelector(".router")) {
      document.querySelector(".router").style.top = "95px";
    }
  }
};

/*Toggle support donwload*/
export const support = () => {
  document.querySelectorAll("path").forEach((supp) => {
    supp.addEventListener("click", handleClick);
  });
};

function handleClick(e) {
  e.srcElement.parentNode.classList.toggle("rotate");
  e.srcElement.parentNode.parentElement.children[1].classList.toggle("opened");
  e.srcElement.parentNode.parentElement.classList.toggle("darkBlueHover");
}

/* Update header Theme */
export const theme = () => {
  document.querySelector(
    ".theme"
  ).innerHTML = `<div class="wrapper"><a href="page2.html"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span>${localStorage.getItem("theme")}</span>
</a>
</div>`;
};

export const theme2 = () => {
  document.querySelector(
    ".theme2"
  ).innerHTML = `<div class="wrapper"><a href="page2.html" class="darkBlue"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span>${localStorage.getItem("theme")}</span>
</a>
<a href="page3.html" class="blue"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span style="font-size: 15px">${localStorage.getItem(
    "thematique"
  )}</span>
</a>
</div> `;
};

/* Add event listener to exercice */
export const exercice = () => {
  document.querySelectorAll(".exercice").forEach((ex) => {
    ex.addEventListener("click", (event) => {
      localStorage.setItem("exercice", event.target.outerText);
      window.location = "exercice.html";
    });
  });
};

export const showPropos = () => {
  document.querySelector(".propos").addEventListener("click", toggleClass);
};

export const closePropos = () => {
  const close = document.querySelectorAll("#close");
  close.forEach((el) => {
    el.addEventListener("click", toggleClass);
  });
};

export function toggleClass() {
  document.querySelector("#propos").classList.toggle("visible");
}

export const displayProfil = () => {
  document.querySelector("#profil_Svg").addEventListener("click", () => {
    document.querySelector(".profil").classList.toggle("visible");
  });
};

// export const closeProfil = () => {
//   document.querySelector("#close").addEventListener("click", () => {
//     document.querySelector(".profil").classList.remove("visible");
//   });
// };

export const displayImpressum = () => {
  document.querySelector(".impressum").addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".impressum_container").classList.add("visible");
  });
};

export const closeImpressum = () => {
  document.querySelector("#close_impressum").addEventListener("click", () => {
    document.querySelector(".impressum_container").classList.remove("visible");
  });
};

export const deconexion = () => {
  document.querySelector("#deconexion").addEventListener("click", () => {
    window.location = "index.html";
  });
};

window.onload = () => {
  showPropos();
  closePropos();
  displayImpressum();
  closeImpressum();
};
