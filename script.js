let menuButton = document.getElementById('menu-button');
let menu = document.getElementById('menu-id');
let cross = document.getElementById('cross-id');
let links = document.getElementsByClassName('menu-link')

function showMenu() {
  menu.classList.replace('hide', 'show');
}

function hideMenu() {
  menu.classList.replace('show', 'hide');
}

menuButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', hideMenu);
}
