const initTabs = () => {
  const catalog = document.querySelector('.catalog');
  const servicesAndSolutions = document.querySelector('.services-and-solutions');

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

  if (servicesAndSolutions) {
    const tabHeadersServicesAndSolutions = servicesAndSolutions.querySelectorAll('[data-tab]');
    const contentBoxesServicesAndSolutions = servicesAndSolutions.querySelectorAll('[data-tab-content]');

    init(servicesAndSolutions, tabHeadersServicesAndSolutions, contentBoxesServicesAndSolutions);
  }
};

export {initTabs};
