const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
if (email.value === "" || password.value === "" ) {
    return alert('fill in all fields');
} else {
    console.log(`login: ${email.value}; password: ${password.value}`);
    event.currentTarget.reset();
    }
}
