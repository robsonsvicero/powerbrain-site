let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll('.dot');
let currentIndex = Math.floor(dots.length / 2); // Iniciar no meio
let cards = document.querySelectorAll('.card');

// Atualizar os dots no carregamento
updateDots(currentIndex);

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', function () {
  document.querySelector('.slider').appendChild(cards[0]);
  cards = document.querySelectorAll('.card');
  currentIndex = (currentIndex + 1) % dots.length;
  updateDots(currentIndex);
});

prev.addEventListener('click', function () {
  document.querySelector('.slider').prepend(cards[cards.length - 1]);
  cards = document.querySelectorAll('.card');
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateDots(currentIndex);
});