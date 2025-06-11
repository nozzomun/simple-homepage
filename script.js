const toggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    toggle.classList.toggle('open');
  });
}

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
