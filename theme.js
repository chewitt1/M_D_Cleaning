/*Header Actions*/
let title = document.querySelector(".title");
let dropdown = document.querySelector(".services-dropdown");
let services = document.querySelector(".services");
let servicesIcon = document.querySelector(".services-icon");
let menu = document.querySelector(".menu");
let main = document.querySelector("main");

let dropdownOpen = false;


function setDropdown(){
    if(!dropdownOpen){
        servicesIcon.innerHTML = "expand_less";
        dropdown.style.display = "flex";
        dropdown.classList.add("dropdown-display");
        dropdownOpen = true;
    }
    else{
        servicesIcon.innerHTML = "expand_more";
        dropdown.style.display = "none";
        dropdown.classList.remove("dropdown-display");
        dropdownOpen = false;
    }
}
title.addEventListener("click", () => {
    document.location = "./index.html";
});

services.addEventListener("click", setDropdown);
menu.addEventListener("click", setDropdown);

/*Menu Animation*/
