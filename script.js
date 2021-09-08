// Fichier pour initialiser la structure html


let body = document.querySelector('body');

// menu
let header = document.createElement('header');
let nav = document.createElement('nav');
let a1 = document.createElement('a');
let a2 = document.createElement('a');
let a3 = document.createElement('a');
let a4 = document.createElement('a');
let a5 = document.createElement('a');

nav.style.backgroundColor = "salmon";
nav.style.visibility = "hidden";

a1.setAttribute("href", "#exo1");
a1.setAttribute("title", "Exercice 1");
a1.textContent = "Exercice 1 🍔 ";
a2.setAttribute("href", "#exo2");
a2.setAttribute("title", "Exercice 2");
a2.textContent = "Exercice 2 🍔 ";
a3.setAttribute("href", "#exo3");
a3.setAttribute("title", "Exercice 3");
a3.textContent = "Exercice 3 🍔 ";
a4.setAttribute("href", "#exo4");
a4.setAttribute("title", "Exercice 4");
a4.textContent = "Exercice 4 🍔 ";
a5.setAttribute("href", "#exo5");
a5.setAttribute("title", "Exercice 5");
a5.textContent = "Exercice 5";

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
nav.appendChild(a4);

// Saut de ligne (à appeler au besoin)
let br = document.createElement('br');

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

section.appendChild(exo3);
exo3.appendChild(title_exo3);

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