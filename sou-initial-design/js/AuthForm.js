const auth_sign_in_btn = document.querySelector("#auth-sign-in-btn");
const auth_sign_up_btn = document.querySelector("#auth-sign-up-btn");
const auth_container = document.querySelector(".auth-container");
const auth_sign_in_btn2 = document.querySelector("#auth-sign-in-btn2");
const auth_sign_up_btn2 = document.querySelector("#auth-sign-up-btn2");

auth_sign_up_btn.addEventListener("click", () => {
    auth_container.classList.add("auth-sign-up-mode");
});

auth_sign_in_btn.addEventListener("click", () => {
    auth_container.classList.remove("auth-sign-up-mode");
});

auth_sign_up_btn2.addEventListener("click", () => {
    auth_container.classList.add("auth-sign-up-mode2");
});

auth_sign_in_btn2.addEventListener("click", () => {
    auth_container.classList.remove("auth-sign-up-mode2");
});