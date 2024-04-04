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
