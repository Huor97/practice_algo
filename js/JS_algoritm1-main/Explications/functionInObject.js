// En javascript, il y a deux manières de définir une fonction

function PremiereFonction() {
  return;
}

// La deuxième syntage utilise une flèche => c'est pour cela que l'on appelle cette forme une Arrow function
const DeuxiemeFonction = () => {
  return;
};

// Un objet peut contenir des valeurs de tous types
// ... y compris des fonctions !

// Définissons un objet

const ExempleObject = {};

// Attribuer une propriété

ExempleObject.age = 25;
console.log(ExempleObject.age); // Accéder à la propriété âge

// Attribuer une fonction

ExempleObject.ecrireAge = () => {
  console.log("Hey, je suis la fonction dans l'objet");
};

ExempleObject.ecrireAge(); // Utiliser la fonction dans l'objet

const DeuxiemeExemple = {
  taille: 180,
  ecrireTaille: () => {
    console.log("hey");
  },
};
