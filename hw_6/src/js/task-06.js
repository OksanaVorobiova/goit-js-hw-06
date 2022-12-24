const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add("invalid");
    }
}