const form = document.querySelector('form');
const thanks = document.querySelector('.thank-you');
const submit = document.getElementById('submit');
const rating = document.querySelector('.rating-value');
const ratingBtn = document.querySelectorAll('form button');
let score = 3;

submit.addEventListener('click', onSubmit);

ratingBtn.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(e) {
    e.preventDefault();
    rating.innerHTML = score;
    thanks.classList.add('show');
    thanks.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    event.preventDefault();
    if(event.target.classList.contains('rating-btn')) {
    score = event.target.innerHTML;
    console.log(score);
    }
}