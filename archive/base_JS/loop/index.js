// for (let i = 0; i < 10; i++) {
//     console.log(`je suis l'index ${i}`)
// }

// console.log(`---------------------------`)

// for (let i = 0; i<=5; i++) {

//     if (i==2) {
//         console.log(`je m'incruste`)
//     }

//     console.log(`je suis l'index ${i}`)
// }
// console.log(`---------------------------`)

// for (let b = 0; b<=5; b++) {

//     if (b==2) {
//         console.log(`Pair`)
//     } else{
//         console.log(`je suis l'index ${b}`)
//     }
// }
// console.log(`---------------------------`)
// let index = 0;
// while (index <= 5) {
//     console.log(`${index}`)
//     index++;
// }

// console.log("-------forEach-------")

// let array2 = ["pomme", "cerise", "poire", "voiture", "camion"]

// array2.forEach(function (item) {
//     console.log(`${item}`)
// });

let arrayObject5 = [{
    id: 1,
    brand: "Bentley",
    model: "Continental GT"
},
{
    id: 2,
    brand: "Lend Rover",
    model: "Evoque"
  
},
{
    id: 3,
    brand: "RollsRoyce",
    model: "Phantom"
},

{
    id: 4,
    brand: "renge rover",
    model: "Velar"
}
];

let arrayChristophe = [];
arrayObject5.forEach(function(item){
    arrayChristophe.push(item.model)
});
console.log(arrayChristophe)

console.log("-----------map-----------")

// let getObject = arrayObject5.map(function(item){
//     return item.model
// })

//  console.log(getObject)

//  console.log("---------clé & valeur---------")

// let car = {
//     id: 1,
//     brand: "Bentley",
//     model: "Continental GT",
//     year: 2019,
//     doors: 4,
//     speed: "Turbo"
// }

// for (let key in car) {
//     console.log(`${key} : ${car[key]}`)
// }




