// const TIME_LIMIT = document.querySelector("#timer").dataset.time;
const TIME_LIMIT = localStorage.getItem("durée");
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function onTimesUp() {
  clearInterval(timerInterval);
  /* DO SOMETHING .... */
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;

    timeLeft = TIME_LIMIT - timePassed;

    document.getElementById("timer").innerHTML = formatTime(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${minutes}:${seconds}`;
}

window.onload = startTimer();
