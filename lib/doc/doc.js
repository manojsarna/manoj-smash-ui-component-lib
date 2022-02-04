


// card , header , drawer........
const components = document.querySelectorAll('.sm-nav-item');

const initialBtn = components[0];

const localStoreButtonName = localStorage.getItem('currentBtnName'); 

//setting current button value
let currentBtn =  initialBtn ;  // card


//function to store Button Text in Local Storage
const saveToLocalStorage = (item) => {
  // console.log("save to local storage",item) 
  localStorage.setItem('currentBtnName', item)
}

// Fetching if Local Storage has any Button Name saved previously 

const currentBtnName = localStoreButtonName!==null ? localStoreButtonName : currentBtn.textContent.trim();  

window.location.href = `/lib/doc/doc.html#${currentBtnName.toLowerCase()}`;

components.forEach((eachBtn)=>{

  // checking if the button Name from local storage has active class or not
  // this is working when we refreshing 
  if(eachBtn.textContent.trim()===currentBtnName){

    // if we find the button we will add active class to that
    eachBtn.classList.add("sm-nav-item-selected");

    // updating currentBtn
    currentBtn = eachBtn;

  }

  // this is working while we are clicking on any button 
  eachBtn.addEventListener("click", (e)=>{

    //when new button click comes removing currentBtn active class adding to eachBtn setting currentBtn again.
    currentBtn.classList.remove("sm-nav-item-selected")
    eachBtn.classList.add("sm-nav-item-selected")
    currentBtn=eachBtn;
    const navSection = document.querySelector(".sm-nav");
    navSection.classList.contains("sm-nav-show") ? navSection.classList.remove("sm-nav-show") : navSection.classList.add("sm-nav-show");
    //Finally saving the button name to local storage 
    saveToLocalStorage(currentBtn.textContent.trim());
    })
 
})

 
// MOBILE HAMBURGER

const hbBtn = document.querySelector("#hb-menu");
console.log(hbBtn);


hbBtn.addEventListener("click",()=>{
// need to toggle again upon clicking the button in the small sized navbar
    const navSection = document.querySelector(".sm-nav");
    navSection.classList.contains("sm-nav-show") ? navSection.classList.remove("sm-nav-show") : navSection.classList.add("sm-nav-show");
    
})

const toggleHbBtn = document.querySelectorAll(".toggle-hb");

toggleHbBtn.forEach((eachBtn)=>{

  eachBtn.addEventListener("click",()=>{
    console.log(eachBtn);
    // need to toggle again upon clicking the button in the small sized navbar
        const navSection = document.querySelector(".sm-nav");
        navSection.classList.contains("sm-nav-show") ? navSection.classList.remove("sm-nav-show") : navSection.classList.add("sm-nav-show");
        
    })
})
