const progress = document.getElementById('progress'); // Sélection de l'élément HTML avec l'ID 'progress' (la barre de progression)
const prev = document.getElementById('prev'); // Sélection de l'élément HTML avec l'ID 'prev' (le bouton Précédent)
const next = document.getElementById('next'); // Sélection de l'élément HTML avec l'ID 'next' (le bouton Suivant)
const circles = document.querySelectorAll('.circle'); // Sélection de tous les éléments HTML avec la classe 'circle' (les cercles numérotés)

let currentActive = 1; // Variable pour suivre l'étape actuelle, initialisée à 1

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update(); // Appel de la fonction update() après avoir cliqué sur le bouton Suivant
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update(); // Appel de la fonction update() après avoir cliqué sur le bouton Précédent
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active'); // Ajout de la classe 'active' aux cercles précédents à l'étape actuelle
        } else {
            circle.classList.remove('active'); // Suppression de la classe 'active' des cercles suivants à l'étape actuelle
        }
    });

    const actives = document.querySelectorAll('.active'); // Sélection de tous les cercles actifs

    // Mise à jour de la largeur de la barre de progression en fonction du nombre de cercles actifs
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Désactivation du bouton Précédent si l'étape actuelle est la première
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        // Désactivation du bouton Suivant si l'étape actuelle est la dernière
        next.disabled = true;
    } else {
        // Activation des deux boutons si l'étape actuelle n'est ni la première ni la dernière
        prev.disabled = false;
        next.disabled = false;
    }
}
