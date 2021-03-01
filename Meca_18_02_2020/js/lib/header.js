window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.querySelector("header").style.height = "60px";
  } else {
    document.querySelector("header").style.height = "95px";
  }
}
