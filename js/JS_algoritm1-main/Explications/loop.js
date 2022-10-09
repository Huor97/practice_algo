// Le but de ce fichier est de montrer comment incrémenter une valeur à partir d'une boucle
let counter = 0;

for (let i = 0; i < 10; i++) {
  counter = counter + 5;
}

console.log(counter);

let j = 0;
while (j < 2) {
  counter = counter / 2;
  j++;
}

console.log(counter);

let counterBis = 0;

for (let k = 0; k < 3; k++) {
  counterBis = counterBis + 1;
  console.log("tourne dans boucle for", counterBis);
  let l = 0;
  while (l < 4) {
    console.log(
      "tourne dans boucl while avant calculer counter Bis",
      counterBis
    );
    counterBis = counterBis + 3;
    l++;
  }
}

console.log(counterBis);
