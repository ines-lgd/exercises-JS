// Fichier pour initialiser la structure html


let body = document.querySelector('body');

// menu
let header = document.createElement('header');
let nav = document.createElement('nav');
let a = document.createElement('a');

nav.style.backgroundColor = "lavender";
nav.style.visibility = "hidden";
a.setAttribute("href", "#exo1");
a.setAttribute("title", "Exercice 1");
a.textContent = "Exercice 1";

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(a);

// section
let section = document.createElement('section');

body.appendChild(section);

// Exo 1
let exo1 = document.createElement('article');
let title_exo1 = document.createElement('h2');
title_exo1.setAttribute("id", "exo1");
title_exo1.textContent = "Exercice 1 - Générateur de mot de passe";

section.appendChild(exo1);
exo1.appendChild(title_exo1);

// Exo 2
let exo2 = document.createElement('article');
let title_exo2 = document.createElement('h2');
title_exo2.setAttribute("id", "exo2");
title_exo2.textContent = "Exercice 2 - Convertisseur F° / C°";

section.appendChild(exo2);
exo2.appendChild(title_exo2);

// Exo 3
let exo3 = document.createElement('article');
let title_exo3 = document.createElement('h2');
title_exo3.setAttribute("id", "exo3");
title_exo3.textContent = "Exercice 3 - Générateur de citation";

section.appendChild(exo2);
exo2.appendChild(title_exo2);

// Exo 4
let exo4 = document.createElement('article');
let title_exo4 = document.createElement('h2');
title_exo4.setAttribute("id", "exo4");
title_exo4.textContent = "Exercice 4 - Toggle Dark mode";

section.appendChild(exo4);
exo4.appendChild(title_exo4);

// Exo 5
let exo5 = document.createElement('article');
let title_exo5 = document.createElement('h2');
title_exo5.setAttribute("id", "exo5");
title_exo5.textContent = "Exercice 5 - Burger menu";

section.appendChild(exo5);
exo5.appendChild(title_exo5);