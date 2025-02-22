'use ctrict'

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu-list');

  burger.addEventListener('click', () => {

    menu.classList.toggle('header__menu-list--active');

    if (menu.classList.contains('header__menu-list--active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });
});


// Form validation


const form = document.querySelector('.contact__form');
const formErrors = document.getElementById('formErrors');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const locationInput = document.getElementById('location');
const budgetInput = document.getElementById('budget');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const errors = []; 
    const fieldsWithErrors = []; 

    if (nameInput.value.trim().length < 2) {
        errors.push('The "Name" field must contain at least 2 characters.');
        fieldsWithErrors.push(nameInput);
    }

    if (!validateEmail(emailInput.value.trim())) {
        errors.push('Please enter a valid Email address.');
        fieldsWithErrors.push(emailInput);
    }

    if (locationInput.value.trim().length > 50) {
        errors.push('The "Location" field must not exceed 50 characters.');
        fieldsWithErrors.push(locationInput);
    }

    if (budgetInput.value.trim() && !/^\d+$/.test(budgetInput.value.trim())) {
        errors.push('The "Budget" field must contain only numbers.');
        fieldsWithErrors.push(budgetInput);
    }

    if (subjectInput.value.trim().length < 3) {
        errors.push('The "Subject" field must contain at least 3 characters.');
        fieldsWithErrors.push(subjectInput);
    }

    if (messageInput.value.trim().length < 10) {
        errors.push('The "Message" field must contain at least 10 characters.');
        fieldsWithErrors.push(messageInput);
    }

    if (errors.length > 0) {
        displayErrors(errors, fieldsWithErrors);
        fieldsWithErrors[0].focus(); // Focus on the first invalid field
    } else {
        alert('The form has been successfully submitted! ✅');
        form.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function displayErrors(errors, fields) {
    formErrors.innerHTML = errors.map(error => `<li>${error}</li>`).join('');
    fields.forEach(field => field.classList.add('input-error'));
}

function clearErrors() {
    formErrors.innerHTML = '';
    document.querySelectorAll('.input-error').forEach(field => {
        field.classList.remove('input-error');
    });
}


