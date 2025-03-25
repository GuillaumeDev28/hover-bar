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
      pointer-events: none; /* Permet aux clics de passer à travers */
    }

    #hoverBar:hover {
      background-color: rgba(0, 0, 0, 0.89);
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
      hoverBar.style.pointerEvents = 'auto'; // Active le survol uniquement en haut de la page
    } else {
      hoverBar.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', updateHoverBarState);
  window.addEventListener('load', updateHoverBarState);
})();
