const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
for (const ingredient of ingredients) {
  

let itemEl = document.createElement('li');
itemEl.classList.add('item');
  itemEl.textContent = `${ingredient}`;
  console.log(itemEl.outerHTML);
}

  