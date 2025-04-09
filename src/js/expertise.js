let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll('.dot');
let slider = document.querySelector('.slider');
let cards = Array.from(document.querySelectorAll('.card'));
let currentIndex = 2; // Começa no card central (índice 2)

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function rotateSliderTo(index) {
  // Reorganiza os cards no DOM
  const total = cards.length;
  const offset = (index - currentIndex + total) % total;

  for (let i = 0; i < offset; i++) {
    slider.appendChild(slider.firstElementChild);
  }

  cards = Array.from(document.querySelectorAll('.card')); // Atualiza referência
  currentIndex = index;
  updateDots(currentIndex);
}

next.addEventListener('click', function () {
  slider.appendChild(slider.firstElementChild);
  cards = Array.from(document.querySelectorAll('.card'));
  currentIndex = (currentIndex + 1) % dots.length;
  updateDots(currentIndex);
});

prev.addEventListener('click', function () {
  slider.prepend(slider.lastElementChild);
  cards = Array.from(document.querySelectorAll('.card'));
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateDots(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (index !== currentIndex) {
      rotateSliderTo(index);
    }
  });
});

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    rotateSliderTo(index);
  });
});

updateDots(currentIndex); // Inicia com o dot correto