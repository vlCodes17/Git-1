const hamburger = document.querySelector(".hamburger");
const classExpanded = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
  classExpanded.classList.toggle('expanded')
})
