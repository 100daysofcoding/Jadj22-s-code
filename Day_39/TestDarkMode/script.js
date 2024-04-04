let Darkmode = false;

function changeMode(){
    if(Darkmode){//si le dark mode est activé ou appuyé on le met en light mode
        //light mode
        Darkmode = false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background","white");
        document.getElementById("dark-light-mode").innerHTML =  "light_mode"
    }
    else{
        //Dark mode
        Darkmode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background", "black");
        document.getElementById("dark-light-mode").innerHTML = "dark_mode"
    }
}

let FanMode = false;

function changeFan(){
    if(FanMode) { // si le fan Off est appuyé on le met en met en fan On
        FanMode = false;
        document.getElementById("mode-fan").innerHTML = "mode_fan"
    }else{
        FanMode = true;
        document.getElementById("mode-fan").innerHTML = "mode_fan_off"
    }
}

let btnMenu = false;

function changeMenu(){
    if(btnMenu){// si j'appui sur le bouton menu le btn close apparait
        btnMenu=false;
        document.getElementById("modeMenu").innerHTML = "close"
    }
    else{
        btnMenu = true;
        document.getElementById("modeMenu").innerHTML = "menu"
    }
}