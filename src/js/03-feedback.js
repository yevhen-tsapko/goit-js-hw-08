const form = document.querySelector('.feedback-form');

form.addEventListener('input', evt => {
  const formDatas = {
    email: evt.currentTarget.elements.email.value,
    message: evt.currentTarget.elements.message.value,
  };
  console.log(formDatas);
  localStorage.setItem('form-data', JSON.stringify(formDatas));
});

// form.addEventListener('submit', {});
