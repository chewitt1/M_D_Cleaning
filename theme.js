/*<<<--- MENU  + DRAWER--->>>*/
let menu = document.querySelector(".menu");
let menuTop = document.querySelector(".menu-top");
let menuCenter = document.querySelector(".menu-center");
let menuBottom = document.querySelector(".menu-bottom");

let menuSelected = false;

let drawer = document.querySelector(".drawer");
let drawerItems = document.querySelectorAll(".drawer-item");

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

function getGifName(src){
    return "." + (src.split(".")[1]) + ".gif";
}

drawerItems.forEach(function (item) {
    let drawerImg = item.children[0];
    let imgSrc = drawerImg.getAttribute("src");
    let drawerTxt = item.children[1];
    item.addEventListener("mouseenter", () => {
        drawerImg.setAttribute("src", getGifName(imgSrc));
        drawerTxt.style.color = "#379e97";
    });
    item.addEventListener("mouseleave", () => {
        let drawerImg = item.children[0];
        drawerImg.setAttribute("src", imgSrc);
        drawerTxt.style.color = "black";
    });
});