import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  form.elements.email.value = email;
  form.elements.message.value = message;
}
form.addEventListener(
  'input',
  throttle(
    evt => {
      const formDatas = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formDatas));
    },
    500,
    { trailing: false }
  )
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.table(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
});
