let Darkmode = false;

function changeMode(){
    if(Darkmode){
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