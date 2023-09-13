const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const overlay = document.getElementById("overlay");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
    overlay.style.display = "block"; 
});

formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
    overlay.style.display = "none";
});

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});












