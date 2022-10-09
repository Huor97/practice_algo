// Boucle For

// function BoucleFor1() {
//   for (let i = 0; i < 10; i = i + 1) {
//     console.log(`La variable i a pour valeur ${i}`);
//   }
// }

// function BoucleFor2() {
//   for (let theIndex = 0; theIndex < 10; theIndex++) {
//     if (theIndex % 2 === 1) {
//       console.log("TheIndex est impair");
//     } else {
//       console.log("TheIndex est pair");
//     }
//   }
// }

const Tableau = [1, 3, 32, 25, 35];

function BoucleFor3() {
  let total = 0;
  for (let j = 0; j < Tableau.length; j++) {
    // Que devrais-je faire dans cette boucle pour que la variable total corresponde à la
    // somme de tous les éléments du tableau ?
    total = Tableau[j] + total;
    //j = Tableau[j] + j;
  }
  console.log(total);
  //console.log(j);
}
