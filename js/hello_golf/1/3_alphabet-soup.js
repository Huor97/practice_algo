// Créer une fonction alphabetSoup(str) qui recevra en argument une string str et la retournera avec les lettres triées par ordre alphabétique.

/* 
Exemple : 
Input: "hello"
Output: "ehllo"
*/

function alphabetSoup(str) {

    let ordreByAlphabet = str.split("").sort();

    return ordreByAlphabet;
}

console.log(alphabetSoup("hello"))