const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname')
const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue=surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if(nameValue === '' ) {
        setError(name, 'Please write valid name');
    } 
    else if(nameValue.length<=3){
        setError(name,'Name must be at least 3 characters.')
    }
        else {
        setSuccess(name);
    }
    if(surnameValue === ''  ) {
        setError(surname, 'Please write valid surname');
    }
        else if(nameValue.length<3){
            setError(surname,'Surname must be at least 3 characters.')
    } else {
        setSuccess(surname);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
 }
};
