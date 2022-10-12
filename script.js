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
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', hideMenu);
}

const project = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/About1',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/About1',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/About1',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './images/About1',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  }
]