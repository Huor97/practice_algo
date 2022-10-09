// // Définir une variable nommé count et lui donner la valeur 0
let count = 0;
// let nombreDeCalcule = 4;
// // Crée une première boucle for qui se répétera 8 fois
// // A chaque itération de la boucle, ajouter 4 à count

// for (let i = 0; i < 8; i++) {
//   console.log(`le nombre de départe ${count}\jn`);
//   // Selon toi, quelle sera la valeur de count ?2 ; mauvaise repondes, la resulta est 32
//   count = count + nombreDépart;
//   // console.log() pour vérifier le résultat
//   console.log(
//     `le nombre finale en ajoutant +4 a chaque itération : ${count}\n`
//   );
// }

console.log("---------------- à chaque iteration ajauter 4 -----------------");
// Déclarer les variable.
//let nombreDeDépart = 0;
let valeurPourCalcule = 4;
let valeurFinal = 0;
let ValeurPourCounter = 0;

// Boucle pour counter.
for (let i = 0; i < 8; i++) {
  count = count + 4;
  console.log("Adition par 4 : ", count);
}

console.log(
  "----------------- Dans une function à chaque iteration ajauter 4 et donne juste resulta final--------------- "
);
// Déclaration des variable
let valCalcule = 4;
let nombreDeDépart = 0;
// Function ou Construction des objectifes qui prendre un numbre après utilisateur et adition par 4.
function aditionParQuatr(donnerUnNombre) {
  // Inistialiser rentre à sorti.
  nombreDeDépart = donnerUnNombre;
  // Boucler pour i pendant qui est inferieur de 8 et ajeute 1 à la counter
  for (let i = 0; i < 8; i++) {
    // pandant la boucle adition nombre de départ à 4

    nombreDeDépart = nombreDeDépart + valCalcule;
  }
  // Returner resulta de rentre après aditioner par 4.
  return nombreDeDépart;
}
console.log(aditionParQuatr(0));

console.log("------------- diviser à 2----------------");
// Crée une seconde boucle for qui se répétera 2 fois
for (count; count < 2; count++) {
  // Pour chaque étape, divise le count par 2
  console.log("Le résulta avant divise est:", count);
  // Selon toi, quelle sera la valeur de count ?0 mauvais répond, premier tourne est 0 deusiems tourne est 0.5

  // console.log() pour vérifier le résultat
  console.log("Le résulta final de Count divise à 2", count / 2);
}

console.log("------------------ Boucle dans une boucle -----------------");
// Crée une troisième boucle for qui se répétera 2 fois

for (let count1 = 0; count1 < 2; count1++) {
  // A chaque itération de la boucle :
  //  - Ajouter 3 à count ;
  //count1 = count1 + 3;
  console.log("Résulta de la premier boucle est:", count1 + 3);
  //  - Créer une boucle dans la boucle. Celle-ci se répétera 3 fois ;
  while (count1 < 3) {
    //  - A chaque intération de cette boucle, multiplier count par 2
    //count1 = count1 * 2;
    // Selon toi, quelle sera la valeur de count ? 48
    // console.log() pour vérifier le résultat

    console.log("Résulta de la deuxiem boucle est:", count1 * 2);
    count1++;
  }
}
