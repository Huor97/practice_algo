// L'opérateur modulo s'écrit avec la syntaxe suivabnte : %
// L' opérateur de module ( %) renvoie le reste de la division.

// Exemple :
console.log(11 % 2); // --> 5 * 2 = 10   10 + 1 = 11

// Un modulo sert à savoir si un nombre est divisible par un autre.
// Pour cela, il faut que le modulo soit égal à 0

// Exemple :
if (24 % 8 === 0) {
  console.log("24 est divisible par 8");
}

// Un cas d'usage classique est de savoir si un chiffre est pair ou impair
// Pour cela, on utilise le % 2

// Exemple :
if (21 % 2 === 0) {
  console.log("21 est pair");
} else {
  console.log("21 est impair");
}
