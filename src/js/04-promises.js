import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const delay = formData.get('delay');
  const state = formData.get('state');
  handleResolve(delay, state);
});

function handleResolve(delay, state) {
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve('fulfilled');
      }, delay);
    } else {
      setTimeout(() => {
        reject('rejected');
      }, delay);
    }
  });
  console.log(promise);
  promise
    .then(result => {
      iziToast.success({
        title: 'Успіх',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(error => {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Rejected promise in ${delay}ms`,
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
}
