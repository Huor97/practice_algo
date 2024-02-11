// Faites en sorte que la fonction vowelCount(str) prenne le paramètre string str transmis et renvoie le nombre de voyelles (a, e, i, o, u, y) que contient la chaîne.

/* 
Exemples : 
Input: "hello"
Output: 2

Input: "what a good exercice"
Output: 8
*/

// nombre voyel in string
// rigex pour trouver les voyel

function vowelCount(str) {
    return str.match(/[aeiouy]/gi).length
}

console.log(vowelCount("hello"));