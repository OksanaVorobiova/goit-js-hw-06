const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector('#value'); 

let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementBtn);
decrementBtn.addEventListener('click', onDecrementBtn);

function onIncrementBtn() {
    counterValue += 1;
    counterEl.innerHTML = counterValue;
}

function onDecrementBtn() {
    counterValue -= 1;
    counterEl.innerHTML = counterValue;   
}

console.log(counterValue);

