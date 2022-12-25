const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.addEventListener('input', onInput);

function onInput(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

