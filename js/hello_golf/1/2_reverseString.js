// Créer une fonction reverseString(str) qui prend en paramètre une string et qui retourne cette string en ordre inverse.

/* 
Exemple : 
input : Matthieu
output : ueihttam
*/

function reverseString(str) {
  let i = str.length-1
  let strRivers=""
  while(i>=0){
    strRivers += str[i]
    i--
  }
  console.log(strRivers)
}
reverseString("Matthieu");
