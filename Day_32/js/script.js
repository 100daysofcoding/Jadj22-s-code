let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px"
let menu = false;

function changeMenu(){
    if(menuList.style.maxHeight == "0px"){
        menu = false;
        menuList.style.maxHeight = "300px";
        document.getElementById("menu").innerHTML = "close"
        document.querySelector("main").classList.add("ombre");
    }
    else{
        menu = true;
        menuList.style.maxHeight = "0px";
        document.getElementById("menu").innerHTML = "menu"
        document.querySelector("main").classList.remove("ombre");
    }
}

document.addEventListener('click', function(event)
{
    if(!event.target.closest("#menuList") && !event.target.closest(".menu-icon")){
        menu = true;
        menuList.style.maxHeight = "0px";
        document.getElementById("menu").innerHTML = "menu"
        document.querySelector("main").classList.remove("ombre");
    }
}
)