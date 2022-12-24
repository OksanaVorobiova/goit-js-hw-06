function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.innerHTML = getRandomHexColor();
}

const buttonChangeColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', onClick);


