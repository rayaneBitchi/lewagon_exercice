const formContainer = document.querySelector('.form-container');
const confirmation = document.querySelector('.confirmation');

const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const checkboxInput = document.querySelector('#check');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || checkboxInput.checked === false) {
    alert('Please fill out all fields and check the box');
  } else {
    formContainer.classList.add('hide');
    confirmation.classList.remove('hide');
  }
});