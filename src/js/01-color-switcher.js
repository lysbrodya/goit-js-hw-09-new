const refs = {
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;
let isActive = false;

function onStartBtnClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 100);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
