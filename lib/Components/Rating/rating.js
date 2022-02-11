const allRatings = document.querySelectorAll(".sm-rating .fas");
const outputRating = document.getElementById("rating-result");
let actualRating = 0;

allRatings.forEach((eachBtn)=>{
    eachBtn.classList.contains("starred") ? actualRating+=1 : actualRating;
})

outputRating.innerText = actualRating.toString();

allRatings.forEach((eachBtn)=>{

    eachBtn.addEventListener("click",()=>{

        prevAllFunc(eachBtn).forEach((el)=>el.classList.add("starred"))
        nextAllFunc(eachBtn).forEach((el)=>el.classList.remove("starred"))
        outputRating.innerText = actualRating.toString();
    })

})

allRatings.forEach((eachBtn)=>{

    eachBtn.addEventListener("mouseover",()=>{

        prevAllFunc(eachBtn).forEach((el)=>el.classList.add("starred"))
        nextAllFunc(eachBtn).forEach((el)=>el.classList.remove("starred"))
        outputRating.innerText = actualRating.toString();
    })

})

const prevAllFunc = (el)=> {
    let allEl = [];
    allEl.push(el);
    while(el = el.previousElementSibling){
        allEl.push(el)
    }
    actualRating = allEl.length;
    return allEl;
}

const nextAllFunc = (el)=> {
    let allEl = [];
    while(el = el.nextElementSibling){
        allEl.push(el)
    }
    return allEl;
}

