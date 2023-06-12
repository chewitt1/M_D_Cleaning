let menuCollapse = false;
let menuLgCollapse = false;
const menu = document.querySelector(".menu");
const menuLg = document.querySelector(".menu-lg");
let drawer = document.querySelector(".drawer");

function toggleDrawer(){
    const top = document.querySelector(".menu-top");
    const center = document.querySelector(".menu-center");
    const bottom = document.querySelector(".menu-bottom");

    if(!menuCollapse){
        center.style.transform = "translate(10vw)";
        center.style.backgroundColor = "#379e97";
        top.style.transform = "rotate(-135deg) translate(-0.5vh, -0.5vh)";
        top.style.backgroundColor = "#379e97";
        bottom.style.transform = "rotate(135deg) translate(-1vh, 0.5vh)";
        bottom.style.backgroundColor = "#379e97";
        drawer.style.transform = "translate(200vw)";
        menuCollapse = true;
    }
    else{
        top.style.transform = "rotate(0)";
        top.style.backgroundColor = "black";
        bottom.style.transform = "rotate(0)";
        bottom.style.backgroundColor = "black";
        center.style.transform = "translate(0)";
        center.style.backgroundColor = "black";
        menu.style.backgroundColor = "transparent";
        drawer.style.transform = "translate(0)";
        menuCollapse = false;
    }
}

function toggleDrawerLg(){
    const top = document.querySelector(".menu-top-lg");
    const center = document.querySelector(".menu-center-lg");
    const bottom = document.querySelector(".menu-bottom-lg");

    if(!menuLgCollapse){
        center.style.transform = "translate(-10vw)";
        center.style.backgroundColor = "#379e97";
        top.style.transform = "rotate(-135deg) translate(-0.5vh, -0.5vh)";
        top.style.backgroundColor = "#379e97";
        bottom.style.transform = "rotate(135deg) translate(-1vh, 0.5vh)";
        bottom.style.backgroundColor = "#379e97";
        drawer.style.transform = "translate(200vw)";
        menuLgCollapse = true;
    }
    else{
        top.style.transform = "rotate(0)";
        top.style.backgroundColor = "black";
        bottom.style.transform = "rotate(0)";
        bottom.style.backgroundColor = "black";
        center.style.transform = "translate(0)";
        center.style.backgroundColor = "black";
        menu.style.backgroundColor = "transparent";
        drawer.style.transform = "translate(0)";
        menuLgCollapse = false;
    }
}

menu.addEventListener("click", toggleDrawer);
menuLg.addEventListener("click", toggleDrawerLg);
menuLg.addEventListener("mouseenter", () => {
    const top = document.querySelector(".menu-top-lg");
    const center = document.querySelector(".menu-center-lg");
    const bottom = document.querySelector(".menu-bottom-lg");
    top.style.backgroundColor = "#379e97";
    center.style.backgroundColor = "#379e97";
    bottom.style.backgroundColor = "#379e97";
});
menuLg.addEventListener("mouseleave", () => {
    const top = document.querySelector(".menu-top-lg");
    const center = document.querySelector(".menu-center-lg");
    const bottom = document.querySelector(".menu-bottom-lg");
    top.style.backgroundColor = "black";
    center.style.backgroundColor = "black";
    bottom.style.backgroundColor = "black";
});

window.onscroll = function() {
    if(menuCollapse){
        toggleDrawer();
    }
    if(menuLgCollapse){
        toggleDrawerLg();
    }
}