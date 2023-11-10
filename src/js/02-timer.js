import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputElem: document.querySelector ('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  };

  refs.startBtn.disabled = true;
  let timeDeadline = null;
  refs.startBtn.addEventListener('click', startClock);

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
     console.log(selectedDates[0]);
     if (selectedDates[0] < options.defaultDate) {
      return  window.alert("Please choose a date in the future");
     }
     refs.startBtn.disabled = false;
     timeDeadline = selectedDates[0];
    }}
    flatpickr (refs.inputElem, options);

    function startClock() {
      refs.startBtn.disabled = true;
      const timerId = setInterval(() => {
      const currentTime = Date.now();
      const diff = timeDeadline - currentTime;
      const time = convertMs(diff);
      if (diff < 0) {
        clearInterval(timerId);
        return 
      };

refs.days.textContent = pad(convertMs(diff).days);
refs.hours.textContent = pad(convertMs(diff).hours);
refs.minutes.textContent = pad(convertMs(diff).minutes);
refs.seconds .textContent = pad(convertMs(diff).seconds);
console.log(convertMs(diff));
  }, 1000)};

    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      return { days, hours, minutes, seconds };
    }
    
    function pad(value) {
      return String(value).padStart(2, 0)
    }
    
    function renderTime({ days, hours, minutes, seconds }) {
      const time = `${days}:${hours}:${minutes}:${seconds}`;
      refs.timerElem.textContent = time;
    }

