import throttle from 'lodash.throttle'


const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    const formData = { email: form.email.value, message: form.message.value };

    const formDataStringify = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, formDataStringify);
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

}

