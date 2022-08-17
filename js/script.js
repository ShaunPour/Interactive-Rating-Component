const rating = document.querySelector('.rating');
const form = document.querySelector('form');
const thanks = document.querySelector('.thank-you');
const submit = document.getElementById('submit');
const ratingVal = document.querySelector('.rating-value');
const ratingBtn = document.querySelectorAll('form button');
let score = 3;

submit.addEventListener('click', onSubmit);

ratingBtn.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

ratingBtn.forEach(btn => {
    btn.addEventListener('mouseover', function(e) {
        if(e.target.classList.contains('rating-btn')) {
            e.target.classList.add('active');
            }
    })
});

ratingBtn.forEach(btn => {
    btn.addEventListener('mouseout', function(e) {
        if(e.target.classList.contains('rating-btn')) {
            e.target.classList.remove('active');
        }
    })
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('rating-btn')) {
            e.target.classList.add('active');
        }
    })
})

function onSubmit(e) {
    e.preventDefault();
    ratingVal.innerHTML = score;
    rating.remove();
    thanks.classList.add('show');
    thanks.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    event.preventDefault();

    if(event.target.classList.contains('rating-btn')) {
        event.target.classList.add('active');
}

    console.log(score);
    score = event.target.innerHTML;
}