const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

function handleButtonClick(event) {
  event.stopPropagation();
  nav.classList.toggle("active");
  setAria(nav.classList.contains("active"));

  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria(false);
  });
}

function handleClickOutside(targetElement, callback) {
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target) && !btnMenu.contains(event.target)) {
      document.removeEventListener("click", handleHTMLClick);
      callback();
    }
  }
  document.addEventListener("click", handleHTMLClick);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    setAria(false);
  });
});

function setAria(isActive) {
  btnMenu.setAttribute("aria-expanded", isActive);
  btnMenu.setAttribute("aria-label", isActive ? "Fechar Menu" : "Abrir Menu");
}

btnMenu.addEventListener("click", handleButtonClick);