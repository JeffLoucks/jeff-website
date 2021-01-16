
// Toggle Modal From Contact on Nav
const contact = document.querySelector('.contact');
const backdrop = document.querySelector('.backdrop');
const display = document.querySelector('.display');

contact.addEventListener('click', function () {
    backdrop.classList.toggle('display');
})

backdrop.addEventListener('click', function() {
    backdrop.classList.toggle('display');
})


