// Elements accesed
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu-id');
const cross = document.getElementById('cross-id');
const links = document.getElementsByClassName('menu-link');

// Function to Show menu
function showMenu() {
  menu.classList.replace('hide', 'show');
}

// Function to Hide Menu
function hideMenu() {
  menu.classList.replace('show', 'hide');
}

// EventListener to perform function
menuButton.addEventListener('click', showMenu);

cross.addEventListener('click', hideMenu);
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', hideMenu);
}
