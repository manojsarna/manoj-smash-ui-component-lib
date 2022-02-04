const toggleBtn = document.querySelectorAll(".btn-dark-mode");
console.log(toggleBtn.innerHTML);
var localStorageTheme = localStorage.getItem('theme');

if(localStorageTheme){
    document.documentElement.setAttribute('data-theme',localStorageTheme);
} else{
    document.documentElement.setAttribute('data-theme',"light");
}

toggleBtn.forEach((eachBtn)=>{

    eachBtn.addEventListener("click",(e)=>{
    
        e.preventDefault();
    
        let currentTheme = document.documentElement.getAttribute("data-theme");
    
        if(currentTheme==="light"){
            currentTheme = "dark";
            console.log("light");
            toggleBtn.innerHTML='<i class="fas fa-sun"></i>';
        } else {
            currentTheme = "light";
            console.log("dark");
            toggleBtn.innerHTML='<i class="fas fa-moon"></i>';
        }
    
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
// need to toggle again upon clicking the button in the small sized navbar
        const navSection = document.querySelector(".sm-nav");
    navSection.classList.contains("sm-nav-show") ? navSection.classList.remove("sm-nav-show") : navSection.classList.add("sm-nav-show");
    
    })

})