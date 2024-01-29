const array = [];

// Boucle While

let i = 0;
while (i < 3) {
  array.push(`Element ${i + 1}`);
  i++;
  console.log(array);
}
console.log("--------------------------");
// Boucle For

for (let j = 0; j < array.length; j++) {
  console.log(j, array[j]);
}
console.log("--------------------------");
// Boucle For bis
let k = 0;
for (const el of array) {
  console.log(`Deuxième manière : ${el}`);
  k++; // k = k+1
}
console.log("My k is :", k);
