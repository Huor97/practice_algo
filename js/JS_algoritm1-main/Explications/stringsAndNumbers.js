const LeNombre = 31;
const LaString = " décembre";

const LeNombre_LaString = LeNombre + LaString;

console.log(LeNombre_LaString);

let i = 0;
while (i < 10) {
  console.log(`La boucle tourne pour la fois ${i}`);
  i++;
}

// Un template literal est une syntaxe qui permet d'insérer des variables ou des résultats d'opération
// directement dans une string
const templateLiterals = `Le résultat de 3 par 8 est égal à ${3 * 8}`;
console.log(templateLiterals);

// Retours à la ligne en javascript
const stringWithReturn = "Première ligne \nDeuxième ligne";
console.log(stringWithReturn);

// Tables de multiplication
function multTables(numb) {
  let string = ``;
  for (let i = 1; i < 11; i++) {
    string = `${string}${i} * ${numb} = ${i * numb}${i !== 10 ? "\n" : ""}`;
  }
  return string;
}

console.log(multTables(6));

let count = 0;
for (let i = 0; i < 10; i++) {
  count = count + 5;
}
