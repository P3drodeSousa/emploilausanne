const dropzone = document.querySelector(".dropzone");

dragula([document.querySelector(".answers")], {
  isContainer: function(el) {
    return el.classList.contains("dropzone");
  },
  moves: function(el, source, handle, sibling) {
    return el.classList.contains("number");
  },
  accepts: function(el, target, source, sibling) {
    return target.classList.contains("dropzone");
  },
  invalid: function(el, handle) {
    return false;
  }
})
  .on("drag", function(el) {
    el.classList.add("selected");
  })
  .on("cancel", function(el) {
    el.classList.remove("selected");
    dropzone.classList.remove("over");
  })
  .on("over", function(el, container, source) {
    if (container.children.length === 1) {
      source.appendChild(container.children[0]);
    }
    dropzone.classList.add("over");
  })
  .on("drop", function(el, target, source, sibling) {
    dropzone.classList.remove("over");
    el.classList.remove("selected");
  });
