

const items = document.querySelectorAll('.accordion');

    items.forEach(item => {
      const chevron = item.querySelector('.chevron');
      const text = item.querySelector('.text');

      chevron.addEventListener('click', () => {
        const isOpen = text.classList.contains('show');

        // Fecha todos os itens
        items.forEach(i => {
          i.querySelector('.text').classList.remove('show');
          i.querySelector('.chevron').classList.remove('rotate');
        });

        // Se o item clicado estava fechado, abre
        if (!isOpen) {
          text.classList.add('show');
          chevron.classList.add('rotate');
        }
      });
    });