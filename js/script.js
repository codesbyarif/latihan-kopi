const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
