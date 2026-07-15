(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mainNav = document.querySelector('[data-main-nav]');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var filterButtons = document.querySelectorAll('[data-filter]');
  var galleryItems = document.querySelectorAll('[data-gallery-item]');

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter');

        filterButtons.forEach(function (btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        galleryItems.forEach(function (item) {
          var category = item.getAttribute('data-category');
          var visible = filter === 'all' || category === filter;
          item.hidden = !visible;
        });
      });
    });
  }
})();
