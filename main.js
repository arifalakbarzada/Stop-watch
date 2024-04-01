const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const display = document.getElementById("display");
let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function start() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
  }
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
function reset() {
  clearInterval(timer);
  display.innerText = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
  isRunning = false;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  display.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}



startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
