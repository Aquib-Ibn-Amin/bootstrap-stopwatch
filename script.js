let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.querySelector('button').textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    document.querySelector('button').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const displayTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.getElementById('stopwatch').textContent = displayTime;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('stopwatch').textContent = '0:00:00';
  document.querySelector('button').textContent = 'Start';
}
