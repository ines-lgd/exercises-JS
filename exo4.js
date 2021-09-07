// Création d'un DarkMode
// (varie en mode jour/nuit du style de la page)

// Création du bouton
// Active par défaut le mode sombre
let toggle = document.createElement('button');
toggle.setAttribute("id", "dark-toggle");
toggle.setAttribute("title", "Mettre le mode nuit");
toggle.textContent = "Mettre le mode nuit 🌚";

exo4.appendChild(toggle);

// Mode sombre
let dark_toggle = document.getElementById('dark-toggle');
dark_toggle.addEventListener('click', function () {
    body.style.backgroundColor = '#111';
    body.style.color = '#eee';

    // Changement d'id pour pouvoir mettre le mode clair
    toggle.removeAttribute("id");    
    toggle.setAttribute("id", "light-toggle");
    toggle.setAttribute("title", "Mettre le mode jour");
    toggle.textContent = "Mettre le mode jour 🌞";    
});

// Mode clair
let light_toggle = document.getElementById('light-toggle');
light_toggle.addEventListener('click', function () {
    body.style.backgroundColor = '#eee';
    body.style.color = '#111';
    
    // Changement d'id pour pouvoir mettre le mode sombre
    toggle.removeAttribute("id");    
    toggle.setAttribute("id", "dark-toggle");
    toggle.setAttribute("title", "Mettre le mode nuit");
    toggle.textContent = "Mettre le mode nuit 🌚";    
});