import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let numberOfProm = 0;
  const position = Number(e.target.elements.amount.value);
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);

  const createPromises = () => {
    if (numberOfProm === position) return;

    createPromise(numberOfProm + 1, delay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Успіх',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Помилка',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      })
      .finally(() => {
        numberOfProm += 1;
        delay += step;
        setTimeout(createPromises, delay);
      });
  };

  createPromises();
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
