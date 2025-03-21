document.addEventListener("DOMContentLoaded", function() {
  const whatsappButton = document.querySelector(".whatsapp-button");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
          whatsappButton.style.display = "flex";
      } else {
          whatsappButton.style.display = "none";
      }
  });
});
