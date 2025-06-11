const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

document.addEventListener("DOMContentLoaded", () => {
  if (btnPopup) {
    btnPopup.addEventListener("click", () => {
      wrapper.classList.add("active-popup");
      wrapper.classList.remove("active");
    });
  }

  if (iconClose) {
    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
    });
  }

  if (registerLink) {
    registerLink.addEventListener("click", (e) => {
      e.preventDefault();
      wrapper.classList.add("active");
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      wrapper.classList.remove("active");
    });
  }
});
