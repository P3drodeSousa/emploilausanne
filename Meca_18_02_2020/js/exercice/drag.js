dragula([document.querySelector(".drag")], {
  isContainer: function (el) {
    return el.classList.contains("drag");
  },
  moves: function (el, source, handle, sibling) {
    return el.classList.contains("draggable");
  },
}).on("drop", function (el, target, source, sibling) {
  target.childNodes.forEach((child) => {
    if (child !== el) {
      source.appendChild(child);
    }
  });
});
