let menuCollapse = false;
const menu = document.querySelector(".menu");
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
    prevScrollpos = window.pageYOffset;
}

menu.addEventListener("click", toggleDrawer);



window.onscroll = function() {
    if(menuCollapse){
        toggleDrawer();
    }
}