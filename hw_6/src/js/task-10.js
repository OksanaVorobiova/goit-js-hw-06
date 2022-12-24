function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  const divArray = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArray.push(divEl);
  }
  return divArray;
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy');
const boxesEl = document.getElementById('boxes');

//inputEl.addEventListener('input', )

buttonCreate.addEventListener('click', () => {
  let boxes = createBoxes(inputEl.value);
  boxesEl.append(...boxes);
});

buttonDestroy.addEventListener('click', destroyBoxes);
