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

// Ajouter un écouteur d'événements sur le document pour détecter les clics
document.addEventListener('click', function(event) {
    // Vérifier si l'élément cliqué n'est pas le menu ni un enfant du menu
    if (!event.target.closest('#menuList') && !event.target.closest('.menu-icon')) {
        // Fermer le menu si c'est le cas
        menuList.style.maxHeight = "0px";
        modeMenu = true;
        document.getElementById("modeMenu").innerHTML = "menu"
    }
});

