let darkMode = false;

function changeDarkMode(){
    if(darkMode){ //si le DarkMode est cliqué ou activé on met en lightMode
        //Light mode
        darkMode =false
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#efe7e5");
        document.getElementById("dark-light-mode").innerHTML = "Dark mode"
    }else {
        //dark mode
        darkMode =true
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","black");
        document.getElementById("dark-light-mode").innerHTML = "Light mode"
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var app = document.getElementById('typewriter');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Hello,<br> je suis Adjanke Joel')
        .pauseFor(2500)
        .deleteAll()
        // .typeString('Découvrez mes projets.')
        // .pauseFor(2500)
        // .deleteAll()
        .start();
});



