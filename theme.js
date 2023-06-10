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
menu.addEventListener("click", setMenu);

/*Menu Animation*/
function setMenu(){
    let top = document.querySelector(".menu-top");
    let center = document.querySelector(".menu-center");
    let bottom = document.querySelector(".menu-bottom");
    if(!dropdownOpen){
        center.style.transform = "translate(100px)";
        center.style.backgroundColor = "#379e97";
        top.style.transform = "rotate(-135deg) translate(-0.5vh, -0.5vh)";
        top.style.backgroundColor = "#379e97";
        bottom.style.transform = "rotate(135deg) translate(-1vh, 0.5vh)";
        bottom.style.backgroundColor = "#379e97";
    }
    else{
        center.style.transform = "translate(0)"
        center.style.backgroundColor = "black";
        top.style.transform = "rotate(0) translate(0)";
        top.style.backgroundColor = "black";
        bottom.style.transform = "rotate(0) translate(0)";
        bottom.style.backgroundColor = "black";
    }
    setDropdown();
}