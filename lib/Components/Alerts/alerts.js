const alertCloseBtn = document.querySelector("#alert-success-close");

const alertToRemove = document.querySelector("#alert-success")

alertCloseBtn.addEventListener("click",()=>{

    alertToRemove.style.display = "none";
})

