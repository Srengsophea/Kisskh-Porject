const togglePassword = document.querySelector('.toggle');
const passwordInput = document.querySelector('.password');
    togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove("bi-eye-slash"),
        togglePassword.classList.add('bi-eye');
    }
    else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('bi-eye'),
        togglePassword.classList.add('bi-eye-slash');
    }
})  
const togglePassword1 = document.querySelector('#togglePassword');
const passwordInput1 = document.querySelector('#password');
togglePassword1.addEventListener('click', () => {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        togglePassword1.classList.remove("bi-eye-slash"),
        togglePassword1.classList.add('bi-eye');
    } else {
        passwordInput1.type = 'password';
        togglePassword1.classList.remove('bi-eye'),
        togglePassword1.classList.add('bi-eye-slash');
    }
})
const togglePassword2 = document.querySelector('.toggle1');
const passwordInput2 = document.querySelector('.password1');
togglePassword2.addEventListener('click', () => {
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text';
        togglePassword2.classList.remove("bi-eye-slash"),
        togglePassword2.classList.add('bi-eye');
    } else {
        passwordInput2.type = 'password';
        togglePassword2.classList.remove('bi-eye'),
        togglePassword2.classList.add('bi-eye-slash');
        }
})

