const btnAction = document.querySelector("#btn-action");

const btnHide = document.querySelector("#btn-hide");


const counter = document.querySelector("#counter");

const hideBadge = document.querySelector("#hide-me");

btnAction.addEventListener("click",()=>{

    let count = parseInt(counter.textContent);
    count = count+1;
    counter.textContent = count<100 ? count : 1
})

btnHide.addEventListener("click",()=>{
console.log(hideBadge.style)
    hideBadge.style.display = hideBadge.style.display ==="none" ? "grid" : "none";
    btnHide.textContent = btnHide.textContent ==="Hide" ? "Show" : "Hide";
},false)