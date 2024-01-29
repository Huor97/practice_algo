/* 
Définir une variable nommée loop
Définir une variable nommée limit, et lui assigner la valeur de 10
Créez une boucle avec une variable i commençant à 0 et s'incrémentant à chaque itération de la boucle. 
La boucle doit s'exécuter aussi longtemps que i est strictement inférieur à limit.
*/

let loop = 0;
let limit = 10;
for (let i = 1; i < limit; i++) {
  console.log(`i est strictement inferieur de limit: ${(loop = loop + 1)}`);
}
