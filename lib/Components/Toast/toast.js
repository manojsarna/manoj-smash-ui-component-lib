const successToastBtn = document.getElementById("toast-success-btn");
const toastContEl = document.querySelector(".sm-toast-container");

const closeToastBtn = document.querySelector(".sm-close-icon");
let setTimeOutId;
successToastBtn.addEventListener("click", () => {

    showToast();

    setTimeOutId = setTimeout(() => {
      hideToast();
    }, 3000);

  });

  closeToastBtn.addEventListener("click", () => {
      hideToast();
      clearTimeout(setTimeOutId);
  });

function showToast() {
    toastContEl.classList.add("sm-toast-container-show");
}
function hideToast() {
    toastContEl.classList.remove("sm-toast-container-show");
}
