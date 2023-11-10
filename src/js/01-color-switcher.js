
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.body,
  };
  refs.startBtn.addEventListener('click', onStartBtnClick);
  refs.stopBtn.addEventListener('click', onStopBtnClick);

  function onStartBtnClick(e) {
    btn.start();

  }
  function onStopBtnClick(e) {
    btn.stop();
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
refs.stopBtn.disabled = true;
const btn = {
  setIntervalId: null,

start() {
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;
this.setIntervalId = setInterval(() => {
const randomHexColor = getRandomHexColor();

refs.body.style.backgroundColor = randomHexColor;
}, 1000)
},

stop() {
clearInterval(this.setIntervalId);
refs.stopBtn.disabled = true;
refs.startBtn.disabled = false;
}
}