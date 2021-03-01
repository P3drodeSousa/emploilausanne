// dragula([document.querySelector("#left"), document.querySelector("#right")]);

dragula(
  [document.querySelector(".answers"), document.querySelector(".sweet")],
  {
    copy: false, // elements are moved by default, not copied
    copySortSource: false, // elements in copy-source containers can be reordered
    revertOnSpill: false, // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,

    isContainer: function(el) {
      return el.classList.contains("drop");
    },
    moves: function(el, source, handle, sibling) {
      return el.classList.contains("answer");
    },
    accepts: function(el, target, source, sibling) {
      return target.classList.contains("drop");
    },
    invalid: function(el, handle) {
      return false;
    }
  }
)
  .on("drag", function(el) {
    el.classList.add("dragging");
  })
  .on("drop", function(el, target, source, sibling) {
    target.parentElement.style.opacity = "1";
    target.style.border = "none";
    console.log(target.parentElement);
    const child = target.children;
    if (child.length > 1) {
      source.appendChild(child[0]);
    }
  });
