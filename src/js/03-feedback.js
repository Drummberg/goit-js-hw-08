import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
    const formData = { email: form.email.value, message: form.message.value };

    const formDataStringify = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, formDataStringify);
}

function onFormSubmit(evt) {
    evt.preventDefault();

    if (evt.target.email.value === '') {
    alert('Please enter your email')
    return
    }
    if (evt.target.message.value === '') {
    alert('Please type your message')
    return
    }

    const formDataSubmit = { email: form.email.value, message: form.message.value };

    console.log(formDataSubmit);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function populateForm() {
    const savedTextForm = localStorage.getItem(STORAGE_KEY);
    const savedTextFormParsed = JSON.parse(savedTextForm);

    if (savedTextFormParsed) {
        form.email.value = savedTextFormParsed.email;
        form.message.value = savedTextFormParsed.message;
    }
    
}
