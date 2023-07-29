const dropdowns = () => {
  const menuBtns = document.querySelectorAll('.js-dropdowns');

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', (evt) => {
      let currentBtn = evt.currentTarget;

      menuBtns.forEach((menuBtnEl) => {
        if (menuBtnEl !== currentBtn) {
          menuBtnEl.classList.remove('open');
        }
      });
      currentBtn.classList.toggle('open');
    });

  });

  document.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('open')) {
      menuBtns.forEach((el) => {
        el.classList.remove('open');
      });
    }
  });
};

export {dropdowns};
