const title = document.querySelector("#title");
const dropzone = document.querySelector(".dropZone");

dragula([document.querySelector("#right")], {
  isContainer: function(el) {
    return el.classList.contains("dropZone");
  },
  moves: function(el, source, handle, sibling) {
    return el.classList.contains("images");
  },
  accepts: function(el, target, source, sibling) {
    return target.classList.contains("dropZone");
  },
  invalid: function(el, handle) {
    return false;
  }
})
  .on("drag", function(el) {
    el.classList.add("dragging");
  })
  .on("cancel", function(el) {
    el.classList.remove("dragging");
    dropzone.classList.remove("over");
  })
  .on("over", function(el, container, source) {
    if (title) title.remove();

    if (container.children.length === 1) {
      source.appendChild(container.children[0]);
    }
    dropzone.classList.add("over");
  })
  .on("drop", function(el, target, source, sibling) {
    dropzone.classList.remove("over");
    el.classList.remove("dragging");
  });
