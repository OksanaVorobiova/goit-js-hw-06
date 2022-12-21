const categoriesEl = document.querySelector('#categories');
const message = `Number of categories: ${categoriesEl.children.length}`;
console.log(message);

const itemsArray = categories.querySelectorAll('.item');
for (const item of itemsArray) {
    const headingText = item.firstElementChild.textContent;
    const numberOfElements = Number(item.lastElementChild.children.length);

    console.log(`Category: ${headingText} 
Elements: ${numberOfElements}`);
}

