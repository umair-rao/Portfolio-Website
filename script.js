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

// Projects Data to access Dynamically

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Desktop Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    popup_name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    popup_name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Desktop Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    popup_name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    popup_name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '<img src="images/Desktop Snapshoot Portfolio.png" alt="Portfolio Image" />',
    technologies: ['Ruby Rails', 'Javascript', 'css', 'html'],
    live_link: '',
    live_source: '',
  },
];

// Iterates data of Projects for each card

const works = document.getElementById('cards-container');
projects.forEach((element) => {
  const project = document.createElement('div');
  project.className = 'card';
  project.innerHTML = `
    <div class="img-Plaholder"></div>
    <div class="project-detail">
        <h2 id="card-text">${element.name}</h2>
        <div class="work-category">
            <ul id="work-list">
                <li>${element.technologies[0]}</li>
                <li>${element.technologies[1]}</li>
                <li>${element.technologies[2]}</li>
                <li>${element.technologies[3]}</li>
            </ul>
        </div>
        <div id="see-project-btn">
            <button type="button" class="see-project-button">See Project</button>
        </div>
    </div>
  `;
  works.appendChild(project);
});

// Update popup window data for each unique card.

function showPopup(number) {
  const popup = document.createElement('div');
  popup.className = 'popup-back';
  popup.id = 'popup-id';
  popup.innerHTML = `
    <div class="popup-window">
      <button class="close" id="popup-close">
        <i class="fa-solid fa-x"></i>
      </button>
      <div class="title-image">
        ${projects[number].image}
      </div>
      <div class="popup-content">
        <div>
          <h2>${projects[number].name}</h2>
          <ul id="work-list">
              <li>${projects[number].technologies[0]}</li>
              <li>${projects[number].technologies[1]}</li>
              <li>${projects[number].technologies[2]}</li>
              <li>${projects[number].technologies[3]}</li>
          </ul>
          <p id="popup-text">${projects[number].description}</p>
        </div>
      <div class="acsess-buttons">
          <div id="see-live-btn">
              <button type="button" class="popup-buttons">See Live<img class="button-images" src="./images/see-live.svg" alt="see-live-icon"></button>
          </div>
          <div id="see-source-btn">
              <button type="button" class="popup-buttons">See Source<img class="button-images" src="./images/giht.svg" alt="see-source-icon"></button>
          </div>
      </div>
    </div>
  `;
  works.appendChild(popup);

  // Create event listener for close button to remove the popup window on click

  const popupClose = document.getElementById('popup-close');
  popupClose.addEventListener('click', () => {
    const popup = document.getElementById('popup-id');
    works.removeChild(popup);
  });
}

// Loop through the cards to open popup window when See Project button is clicked

const popupButtons = document.getElementsByClassName('see-project-button');
for (let i = 0; i < popupButtons.length; i += 1) {
  popupButtons[i].addEventListener('click', () => {
    showPopup(i);
  });
}

// Email Validartion in form (Check email is in lowercase else show error message)

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  const emailInput = document.getElementById('email');
  msg.innerText = message;

  // update the class for the input
  msg.className = 'error';
  emailInput.className = 'error-box';
}

// Function to show error

function showError(input, message) {
  return showMessage(input, message, false);
}

// Check if email is in lowercase

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#form-id');

const EMAIL_INVALID = 'Enter email in lowercase';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form

  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  // if valid, submit the form.

  if (emailValid) {
    form.submit();
  }
});