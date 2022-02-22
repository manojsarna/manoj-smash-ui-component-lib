const slider = document.getElementById("slider");
const output = document.getElementById("output");

slider.addEventListener("input",(e)=>{
    output.innerText = e.target.value;
})