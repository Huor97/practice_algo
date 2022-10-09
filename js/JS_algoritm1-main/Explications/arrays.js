// Voici notre panier du marché
const marketBasket = ["Pomme", "Orange", "Raisin"];

function ajouterALaFin(array, string) {
  // Je veux ajouter un produit à la fin de l'array
  array.push(string);
}

function ajouterAuDebut(array, string) {
  // Je veux ajouter un produit au début de l'array
  array.unshift(string);
}

function array2String(array, separateur) {
  // Le separateur sera la string insérée entre chaque élément par la méthode .join()
  console.log("La string est :", array.join(separateur));
}

function stringToArray(string, separateur) {
  // Le separateur sera le morceau de string qui sera la limite pour découper la string
  let splitted = string.split(separateur);
  console.log(splitted);
}

console.log("Step 0", marketBasket);

ajouterALaFin(marketBasket, "Ananas");
console.log("Step 1", marketBasket);

ajouterAuDebut(marketBasket, "Coco");
console.log("Step 2", marketBasket);

array2String(marketBasket, "");

stringToArray(
  "J'me présente, je m'appelle Henri, J'voudrais bien réussir ma vie, être aimé,Être beau, gagner de l'argent, Puis surtout être intelligent, Mais pour tout ça il faudrait que j'bosse à plein temps",
  ","
);

function nomDeLaFonction(variables) {
  let toReturn = false;
  // Etape 1

  // Etape 2

  // Etc...

  return toReturn;
}

nomDeLaFonction("hey");
