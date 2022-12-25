const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
const ingredientsEl = document.querySelector('#ingredients');

const makeMarkup = (ingredients) => {
  return ingredients.map(ingredient => {

    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = `${ingredient}`;

    return itemEl;
  });
}

const items = makeMarkup(ingredients);
ingredientsEl.append(...items);

//console.log(makeMarkup(ingredients));

  