let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener('click', function() {
  let cards = document.querySelectorAll('.card');
  document.querySelector('.slider').appendChild(cards[0]);
})

prev.addEventListener('click', function() {
  let cards = document.querySelectorAll('.card');
  document.querySelector('.slider').prepend(cards[cards.length - 1]);
})