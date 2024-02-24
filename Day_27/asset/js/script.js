// const slider = document.querySelector('.photos');

// Arrêter le défilement au survol
// slider.addEventListener('mouseover', () => {
//     slider.style.animationPlayState = 'paused';
// });

// Reprendre le défilement au survol
// slider.addEventListener('mouseout', () => {
//     slider.style.animationPlayState = 'running';
// });


document.querySelectorAll('.bx-info-circle').forEach(function(icon) {
    icon.addEventListener('click', function() {
        var description = this.nextElementSibling;
        description.classList.toggle('visible'); // Ajoute ou supprime la classe "visible"
    });
});


