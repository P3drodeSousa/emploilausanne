const audio = document.querySelector("audio");
const sound = document.querySelector(".soundContainer");
const audioSvg = document.querySelector("#audioSvg");
const path = document.querySelector("#audio");
const path1 = document.querySelector("#audio-1");

let playing = false;

const pausedPlayer = () => {
  sound.style.transform = "scale(1)";
  audioSvg.style.fill = "#501755";

  sound.style.background = "#ECDBEE";
  path.style.visibility = "hidden";
  path1.style.visibility = "hidden";
  path.classList.toggle("run-animation");
  path1.classList.toggle("run-animation2");
};

sound.addEventListener("click", () => {
  if (playing) {
    playing = false;
    audio.pause();
    pausedPlayer();
    return;
  }

  playing = true;

  audio.play();
  sound.style.transform = "scale(1.2)";
  sound.style.background = "#501755";
  audioSvg.style.fill = "white";

  setTimeout(() => {
    path.style.visibility = "visible";
    path.classList.toggle("run-animation");
  }, 400);

  setTimeout(() => {
    path1.style.visibility = "visible";
    path1.classList.toggle("run-animation2");
  }, 200);
});

// AUDIO PLAYER
audio.addEventListener("ended", function() {
  pausedPlayer();
});
