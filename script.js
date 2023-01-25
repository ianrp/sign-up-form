const form = document.forms["form"];
const pwd = form["password"];
const pwdConfirm = form["confirm-password"];
const msg = form.querySelector(".error-message");

form.querySelector("button").addEventListener("click", comparePassword);

function comparePassword() {
    if(pwd.value !== pwdConfirm.value) {
        pwd.classList.add("error");
        pwdConfirm.classList.add("error");
        msg.textContent = "* Passwords do not match";
    } else {
        pwd.classList.remove("error");
        pwdConfirm.classList.remove("error");
        msg.textContent = "";
    }
}