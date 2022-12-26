const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
if (email.value === "" || password.value === "" ) {
    return alert('fill in all fields');
} 
    //console.log(`login: ${email.value}; password: ${password.value}`);
    const dataObj = new Object();
    dataObj.email = email.value;
    dataObj.password = password.value;
    
    console.log(dataObj);
    
    event.currentTarget.reset();
    
}


