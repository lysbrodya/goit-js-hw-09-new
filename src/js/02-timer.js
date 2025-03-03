import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
stopBtn.setAttribute('data-stop', '');

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('input[type="text"]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');
let userSelectedDate = null;
let intervalId = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.setAttribute('disabled', '');
  const startTime = userSelectedDate;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;
    if (deltaTime <= 0) {
      clearInterval(intervalId);
      refs.startBtn.removeAttribute('disabled');
      return;
    }

    updateClockface(deltaTime);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  // refs.startBtn.removeAttribute('disabled');
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';

  refs.seconds.textContent = '00';
  stopBtn.remove();
});

function updateClockface(time) {
  const { days, hours, minutes, seconds } = convertMs(time);
  console.log(`${days}:${hours}:${minutes}:${seconds}`);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onChange(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.startBtn.setAttribute('disabled', ''),
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
    } else {
      refs.startBtn.removeAttribute('disabled');
    }

    console.log(selectedDates[0] < new Date());
  },

  onClose(selectedDates) {
    // document.querySelector('button[data-start]').setAttribute('disabled', '');

    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    refs.startBtn.after(stopBtn);
    // refs.startBtn.setAttribute('disabled', '');
  },
};
flatpickr(refs.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

console.log(options.defaultDate);
