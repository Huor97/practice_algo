// En utilisant le langage JavaScript, écrire une fonction NumberToLetters(num) qui récupérera en argument un nombre (de type string ou de type number) compris entre 0 et 9999 inclus, et le retourne en lettres.
// Pour tous les paramètres non valides, la fonction retournera Paramètre invalide.

/* 
Exemples :

NumberToLetters(15) --> quinze.
NumberToLetters(35) --> trente-cinq.

*/

const zero2sixteen = [
  // dans un tableau chaque élément est une nombre de index
  "zéro", //0
  "un", //1
  "deux", //
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
];
//--------------------//0 =20   // 1=30   // 2=40      // 3=50      // 4=60
const twenty2sixty = ["vingt", "trente", "quarante", "cinquante", "soixante"];
//---------------------// 0 =100  //1=1000
const hundred2thousand = ["cent", "mille"];
