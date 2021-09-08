// Création d'un DarkMode
// (varie en mode jour/nuit du style de la page)

// Création du bouton
// Active par défaut le mode sombre
let toggle = document.createElement('button');
toggle.setAttribute("id", "dark-toggle");
toggle.setAttribute("title", "Mettre le mode nuit");
toggle.textContent = "Mettre le mode nuit 🌚";

exo4.appendChild(toggle);

// Détection de l'id du bouton
toggle_id = toggle.getAttribute("id");

// Changement en fonction de l'id du bouton
function changeMode(){
    if(toggle_id == "dark-toggle"){
        body.style.backgroundColor = '#111';
        body.style.color = '#eee';
    
        // Changement d'id pour pouvoir mettre le mode clair
        toggle.setAttribute("title", "Mettre le mode jour");
        toggle.textContent = "Mettre le mode jour 🌞"; 
        toggle.setAttribute("id", "light-toggle"); 
    }else if(toggle_id == "light-toggle"){
        body.style.backgroundColor = '#eee';
        body.style.color = '#111';
        
        // Changement d'id pour pouvoir mettre le mode sombre
        toggle.setAttribute("title", "Mettre le mode nuit");
        toggle.textContent = "Mettre le mode nuit 🌚";  
        toggle.setAttribute("id", "dark-toggle"); 
    }
};

// Activation de la fonction au click
/// Selection du bouton en Mode foncé pour activer le mode clair
let dark_toggle = document.getElementById('dark-toggle');
dark_toggle.addEventListener('click', function () {
    changeMode(); 
});
/// Selection du bouton en Mode clair pour activer le mode foncé
let light_toggle = document.getElementById('light-toggle');
light_toggle.addEventListener('click', function () {
    changeMode(); 
});