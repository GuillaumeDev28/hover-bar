(function () {
  const hoverBar = document.createElement('div');
  hoverBar.id = 'hoverBar';
  document.body.prepend(hoverBar);

  const content = document.createElement('div');
  content.id = 'hoverBarContent';
  content.innerHTML = `
    <span class="menu-item">La marque</span>
    <span class="menu-item">Nos solutions</span>
  `;
  hoverBar.appendChild(content);

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
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    #hoverBar.active {
      background-color: rgba(0, 0, 0, 0.89);
      pointer-events: auto;
    }
    #hoverBarContent {
      position: relative;
      z-index: 2;
      display: flex;
      gap: 30px;
      font-size: 16px;
      font-family: Arial, sans-serif;
      color: white;
    }
    .menu-item {
      cursor: pointer;
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
