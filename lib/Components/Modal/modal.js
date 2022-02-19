const showBtnEl = document.querySelector("#btn-sm-modal-show");
const closeBtnEl = document.querySelector("#btn-sm-modal-close");
const modalEl = document.querySelector("#sm-modal");

showBtnEl.addEventListener("click", () => {

    modalEl.classList.add("sm-modal-main-show");
});
closeBtnEl.addEventListener("click", () => {

    modalEl.classList.remove("sm-modal-main-show");
});
