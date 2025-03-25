(function () {
  const hoverBar = document.createElement('div');
  hoverBar.id = 'hoverBar';
  document.body.prepend(hoverBar);

  const style = document.createElement('style');
  style.innerHTML = `
    #hoverBar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 54px;
      background-color: transparent;
      transition: background-color 0.3s ease;
      z-index: 9999;
      pointer-events: auto;
    }

    /* Effet hover actif seulement quand en haut de la page */
    #hoverBar.active:hover {
      background-color: rgba(0, 0, 0, 0.89);
    }

    /* Permet de cliquer à travers la barre, même quand elle est noire */
    #hoverBar::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: transparent;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      #hoverBar {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);

  function updateHoverBarState() {
    if (window.scrollY === 0) {
      hoverBar.classList.add('active');
    } else {
      hoverBar.classList.remove('active');
    }
  }

  window.addEventListener('scroll', updateHoverBarState);
  window.addEventListener('load', updateHoverBarState);
})();
