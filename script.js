const toggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    toggle.classList.toggle('open');
  });
}
