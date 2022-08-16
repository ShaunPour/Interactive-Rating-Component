const form = document.querySelector('form');
const thanks = document.querySelector('.thank-you');
const submit = document.getElementById('submit');
const rating = document.querySelector('rating-value');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    thanks.classList.remove('hide');
    thanks.classList.add('show');
})