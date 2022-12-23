const textInput = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        return nameEl.textContent = "Anonymous";
    } else {
        return nameEl.textContent = event.currentTarget.value;
    }
});