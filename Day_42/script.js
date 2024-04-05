let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
let modeMenu = false;

function toggleMenu(){
    if(menuList.style.maxHeight == "0px" && modeMenu){
        modeMenu = false;
        document.getElementById("modeMenu").innerHTML = "close"
        menuList.style.maxHeight = window.innerHeight + "px";

    }else{
        menuList.style.maxHeight = "0px";
        modeMenu = true;
        document.getElementById("modeMenu").innerHTML = "menu"

    }
}


