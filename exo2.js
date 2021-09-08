// Création d'un convertisseur Celsius / Fahrenheit

// Initialisation des balises html
/// Titre Celsius
let celsius_label = document.createElement('label');
celsius_label.textContent = "Celsius (°C) ";
/// Titre Fahrenheit
let fahrenheit_label = document.createElement('label');
fahrenheit_label.textContent = "Fahrenheit (°F) ";

/// Input Celsius
let celsius_input = document.createElement('input');
celsius_input.setAttribute("id", "celsius");
celsius_input.setAttribute("placeholder", "Celsius");
/// Input Fahrenheit
let fahrenheit_input = document.createElement('input');
fahrenheit_input.setAttribute("id", "fahrenheit");
fahrenheit_input.setAttribute("placeholder", "Fahrenheit");

/// Une div pour contenir les titres et les inputs
let convert_div = document.createElement('div');
exo2.appendChild(convert_div);

convert_div.appendChild(celsius_label);
convert_div.appendChild(celsius_input);

/// Saut de ligne
convert_div.appendChild(br);

convert_div.appendChild(fahrenheit_label);
convert_div.appendChild(fahrenheit_input);

// Application des formules de conversion
function convertTemperature(id, value){
    if(id == "celsius"){
        fahrenheit.value = (9/5) * value + 32;
    }else if(id == "fahrenheit"){
        celsius.value = (9/5) * (value + 32);
    }
};

// Le contenu d'un input se modifie en fonction de l'entrée dans l'autre
/// Partie Celsius
celsius = document.getElementById("celsius");
celsius.addEventListener("input", function(){
    convertTemperature(this.id, this.value);
});
/// Partie Fahrenheit
fahrenheit = document.getElementById("fahrenheit");
fahrenheit.addEventListener("input", function(){
    convertTemperature(this.id, this.value);
});