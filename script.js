const confirmPassword = document.querySelector("#password_confirm");
const password = document.querySelector("#password");
const validation = document.querySelector("#validation");

const normalBorder = "0.1rem solid var(--light-purple)";
const redBorder = "0.1rem solid #FF0000";

password.addEventListener("input", e => {
    if ((password.value != confirmPassword.value) && (confirmPassword.value.length != 0)) {
        confirmPassword.style.border =  redBorder;
        password.style.border =  redBorder;
        validation.style.display = "inline";
    } else {
        confirmPassword.style.border =  normalBorder;
        password.style.border =  normalBorder;
        validation.style.display = "none";
    }
})

confirmPassword.addEventListener("input", e => {
    if (password.value == confirmPassword.value) {
        confirmPassword.style.border =  normalBorder;
        password.style.border =  normalBorder;
        validation.style.display = "none";
    } else {
        confirmPassword.style.border =  redBorder;
        password.style.border =  redBorder;
        validation.style.display = "inline";
    }
})