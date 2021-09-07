// Création d'un burger menu
// (le menu s'ouvre et se ferme au clic de son icone)

// creation du bouton du menu à ouvrir
let burger = document.createElement('button');
burger.setAttribute("id", "open-burger");
burger.setAttribute("title", "Ouvrir le menu burger");
burger.textContent = "⭕";

exo5.appendChild(burger);

// Ouverture du menu
let open_burger = document.getElementById('open-burger');
open_burger.addEventListener('click', function () {
    nav.style.visibility = 'visible';

    // Changement d'id pour pouvoir fermer le menu après le clic
    burger.removeAttribute("id");    
    burger.setAttribute("id", "close-burger");
    burger.setAttribute("title", "Fermer le menu");
    burger.textContent = "❌";    
});

// Fermeture du menu
let close_burger = document.getElementById('close-burger');
close_burger.addEventListener('click', function () {
    nav.style.visibility = 'hidden';

    // Changement d'id pour pouvoir ouvrir le menu après le clic
    burger.removeAttribute("id");    
    burger.setAttribute("id", "open-burger");
    burger.setAttribute("title", "Ouvrir le menu burger");
    burger.textContent = "⭕";  
});