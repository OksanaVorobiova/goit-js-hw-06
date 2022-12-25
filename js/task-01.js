const categoriesEl = document.querySelector('#categories');
const message = `Number of categories: ${categoriesEl.children.length}`;
const itemsArray = categoriesEl.querySelectorAll('.item');

function logging() {

console.log(message);

itemsArray.forEach((item) => {

const headingText = item.firstElementChild.textContent;
const numberOfElements = Number(item.lastElementChild.children.length);

console.log(`Category: ${headingText} 
Elements: ${numberOfElements}`);
    });
    
}

console.log(logging());