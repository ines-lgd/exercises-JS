// Création d'un générateur de mot de passe complexe
// (chiffres, lettres min&maj, caractères spéciaux)

// création d'un button pour lancer l'affichage
let random_button = document.createElement('button');
random_button.setAttribute("id", "random-button");
random_button.textContent = "New random password";

exo1.appendChild(random_button);

// création d'une div pour y afficher le résultat
let random_div = document.createElement('div');
random_div.setAttribute("id", "random-div");
random_div.textContent = '';

exo1.appendChild(random_div);

// par défaut, la longueur du mot de passe est de 12 caractères
function generatePassword(password_length = 12) {
    
    // liste de caractères 
    let character_list = "!\"#$%&'(	)*+,-_./0123456789:;<=>\?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^`abcdefghijklmnopqrstuvwxyz{|}~€ˆŸÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÔÕÖÙÚÛÜÝàáâãäçèéêë";
    // liste convertie en tableau
    character_list = character_list.split("");

    // initialisation du mot de passe
    let password = '';

    // boucle répétée par défaut 12x
    for (i = 0; i < password_length; i++) {
        // nombre entier au hasard inférieur au nombre de caractère dans la liste
        let random = Math.floor(Math.random() * character_list.length);
        // ce nombre devient un index pour choisir un caractère dans la liste
        // le mot de passe se complète jusqu'à la fin de la boucle 
        password += character_list[random];
    };

    // si la longueur est un nombre, le résultat s'affiche, sinon "Erreur"
    // (vérification inutile sans prompt)
    let result = (password_length != /[0-9]/) ? password : "Erreur";
    document.getElementById("random-div").textContent = result;
};

// lancement de la fonction au click
random_button.setAttribute("onclick", "generatePassword()");
//document.getElementById("random-button").addEventListener('click', generatePassword);