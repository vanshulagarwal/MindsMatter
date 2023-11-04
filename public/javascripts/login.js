let regBtn = document.querySelector('.reg');
let loginBtn = document.querySelector('.login');
let regForm = document.querySelector('#registerForm');
let loginForm = document.querySelector('#loginForm');

loginBtn.addEventListener('click', function handleClick(){
    // loginForm.classList.remove('display-none');
    // regForm.classList.add('display-none');
    loginForm.style.display="flex";
    regForm.style.display="none";
    loginBtn.classList.add('active');
    regBtn.classList.remove('active');
})

regBtn.addEventListener('click', function hc(){
    // loginForm.classList.add('display-none');
    // regForm.classList.remove('display-none');
    regForm.style.display="flex";
    loginForm.style.display="none";
    regBtn.classList.add('active');
    loginBtn.classList.remove('active');
})