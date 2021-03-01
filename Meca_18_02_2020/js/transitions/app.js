import {
  exercice,
  scrollFunction,
  theme2,
  theme,
  support,
  deconexion,
} from "../app.js";

barba.use(barbaCss);

barba.hooks.before((data) => {
  window.onscroll = function () {
    scrollFunction();
  };
});

barba.init({
  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      sync: true,
      beforeEnter() {
        support();
        deconexion();
      },
      leave() {},
      enter() {},
    },
    {
      name: "test",

      from: {
        namespace: ["home"],
      },
      to: {
        namespace: ["test"],
      },
      sync: true,
      beforeLeave(data) {
        localStorage.setItem("theme", data.trigger.getAttribute("value"));
      },
      leave() {},
      beforeEnter() {
        theme();
        deconexion();
        scrollFunction();
      },
      enter() {},
    },
    {
      name: "test2",
      from: {
        namespace: ["test"],
      },
      to: {
        namespace: ["page3"],
      },
      sync: true,
      beforeLeave(data) {
        localStorage.setItem("thematique", data.trigger.getAttribute("value"));
      },
      leave() {},
      beforeEnter() {
        exercice();
        theme2();
        deconexion();
        scrollFunction();
      },
      enter() {},
    },
    {
      name: "home",
      from: {
        namespace: ["page3"],
      },
      to: {
        namespace: ["test"],
      },
      sync: true,
      leave() {},
      beforeEnter() {
        theme();
        deconexion();
      },
      enter() {},
    },
    {
      name: "test2",
      from: {
        namespace: ["exercice_Menu"],
      },
      to: {
        namespace: ["exercice"],
      },
      sync: true,
      beforeLeave(data) {
        localStorage.setItem("thematique", data.trigger.getAttribute("value"));
      },
      leave() {},
      beforeEnter() {
        exercice();
        theme2();
        deconexion();
      },
      enter() {},
    },
  ],
});
