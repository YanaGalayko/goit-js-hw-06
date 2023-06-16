const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
    const {email, password } = event.currentTarget.elements;
    if ((email.value === "" || password.value === "")){
        alert('Please fill in all the fields!')
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log(formData);
        event.currentTarget.reset();
    }
}
