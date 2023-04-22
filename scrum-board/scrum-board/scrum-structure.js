const formOpenBtn = document.querySelector("#formOpen"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".formClose"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

// Получить модальное окно
var modal = document.getElementById('mod');

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formOpenBtn.addEventListener('click', () => {
//   formContainer.classList.toggle('hidden');
// });

// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
// formCloseBtn.addEventListener('click', () => {
//   formContainer.classList.toggle('hidden');
// });

pwShowHide.forEach((icon) => {
icon.addEventListener("click", () => {
  let getPwInput = icon.parentElement.querySelector("input");
  if (getPwInput.type === "password") {
    getPwInput.type = "text";
    icon.classList.replace("uil-eye-slash", "uil-eye");
  } else {
    getPwInput.type = "password";
    icon.classList.replace("uil-eye", "uil-eye-slash");
  }
});
});

// signupBtn.addEventListener("click", (e) => {
// e.preventDefault();
// formContainer.classList.add("active");
// });
// loginBtn.addEventListener("click", (e) => {
// e.preventDefault();
// formContainer.classList.remove("active");
// });
