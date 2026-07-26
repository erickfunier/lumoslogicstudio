document.querySelectorAll('[data-menu-toggle]').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    document.querySelector(toggle.dataset.menuToggle)?.classList.toggle('is-open');
  });
});
