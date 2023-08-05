const initTabs = () => {
  const catalog = document.querySelector('.catalog');

  const init = (section, header, content) => {
    header.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        header.forEach(function (btn) {
          btn.classList.remove('active');
          btn.removeAttribute('tabindex');
        });
        item.classList.add('active');
        item.setAttribute('tabindex', '-1');

        content.forEach(function (button) {
          button.classList.add('hidden');
        });

        const contentBox = section.querySelector('#' + evt.currentTarget.dataset.tab);
        contentBox.classList.remove('hidden');
      });
    });
  };

  if (catalog) {
    const tabHeadersCatalog = catalog.querySelectorAll('[data-tab]');
    const contentBoxesCatalog = catalog.querySelectorAll('[data-tab-content]');

    init(catalog, tabHeadersCatalog, contentBoxesCatalog);
  }
};

export {initTabs};
