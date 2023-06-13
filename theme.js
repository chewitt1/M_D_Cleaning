/*<<<--- MENU --->>>*/
let menu = document.querySelector(".menu");
let menuTop = document.querySelector(".menu-top");
let menuCenter = document.querySelector(".menu-center");
let menuBottom = document.querySelector(".menu-bottom");

let menuSelected = false;

function setMenuColor(){
    if(!menuSelected){
        menuTop.style.backgroundColor = "black";
        menuCenter.style.backgroundColor = "black";
        menuBottom.style.backgroundColor = "black";
    }
    else{
        menuTop.style.backgroundColor = "#379e97";
        menuCenter.style.backgroundColor = "#379e97";
        menuBottom.style.backgroundColor = "#379e97";
    }
}

menu.addEventListener("mouseenter", ()=>{
    menuTop.style.backgroundColor = "#379e97";
    menuCenter.style.backgroundColor = "#379e97";
    menuBottom.style.backgroundColor = "#379e97";
});

menu.addEventListener("mouseleave", setMenuColor);

menu.addEventListener("click", ()=>{
    if(!menuSelected){
        menuSelected = true;
        setMenuColor();
        menuTop.style.transform = "rotate(45deg) translate(0, 8px)";
        menuCenter.style.transform = "translate(100px)";
        menuBottom.style.transform = "rotate(-45deg) translate(0, -8px)";
    }
    else{
        menuSelected = false;
        setMenuColor();
        menuTop.style.transform = "rotate(0) translate(0)";
        menuCenter.style.transform = "translate(0)";
        menuBottom.style.transform = "rotate(0) translate(0)";
    }
    
});
