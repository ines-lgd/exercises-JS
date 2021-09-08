// Création d'un générateur de citations (de Victor Hugo)
// dans une pop-up/modal (dé)activée au click

// creation du bouton pour ouvrir le pop-up
let button_modal = document.createElement('button');
button_modal.setAttribute("id", "button-modal");
button_modal.setAttribute("title", "Afficher une citation");
button_modal.textContent = "💬";

exo3.appendChild(button_modal);

// Liste de citation
let quote_list = [
    "Qui de bonne heure est vieux restera longtemps jeune.",
    "Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'y a que de mauvais cultivateurs.",
    "La mélancolie, c'est le bonheur d'être triste.",
]

// Affichage du pop-up au clic du bouton
button_modal = document.getElementById("button-modal");
button_modal.addEventListener("click", function(){
    // Selection au hasard d'une citation (même méthode que pour exo1)
    let random_index = Math.floor(Math.random() * quote_list.length);
    let random_quote = quote_list[random_index];
    // Citation dans le pop-up
    alert(random_quote);
});