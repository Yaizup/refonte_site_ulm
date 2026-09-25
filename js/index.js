// On récupère la barre de navigation pour la faire rester visible ou se cacher selon le scroll.
const barreNavigation = document.querySelector('.barre-navigation');
const hauteurSeuil = 80;
let dernierScroll = window.scrollY;

// Cette fonction gère le comportement au scroll.
function gererDefilementNavigation() {
    const positionScroll = window.scrollY;

    // Si on descend assez bas, la barre devient plus compacte.
    if (positionScroll > hauteurSeuil) {
        barreNavigation.classList.add('est-compacte');
    } else {
        barreNavigation.classList.remove('est-compacte');
    }

    // Si on descend, la barre se cache pour laisser plus de place.
    // Si on remonte, elle réapparaît immédiatement.
    if (positionScroll > dernierScroll && positionScroll > hauteurSeuil) {
        barreNavigation.classList.add('est-cachee');
        barreNavigation.classList.remove('est-visible');
    } else {
        barreNavigation.classList.add('est-visible');
        barreNavigation.classList.remove('est-cachee');
    }

    dernierScroll = positionScroll;
}

// On applique la logique quand l'utilisateur scroll.
window.addEventListener('scroll', gererDefilementNavigation, { passive: true });
