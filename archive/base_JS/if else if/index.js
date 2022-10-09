const iLoveJavascript = true;

if (iLoveJavascript) {
    console.log("alors tu va progresser tres vite")
} else{
    console.log("alors ça être trés compliqué pour toi...")
}

const theNumber = 1000;

if (theNumber == 1000) {
    console.log(true)
}else{
    console.log(`non theNumber n'est pas egale a ${theNumber}`)
}
//------------------

const theNumber1 = 1000;
if (theNumber1 != 1000){
    console.log("oui theNumber est diddernet")
}else {
    console.log(`non theNumber n'est pas différent`)
}
// ---------------------
const theNumber2 = 1000;

if (theNumber2 === 1000){
    console.log("oui ils sont pareils")
}else {
    console.log("non ils ne sont pas pareils")
}
//--------------------------
let theNumber3;
console.log(typeof theNumber3)


if(typeof theNumber3 != 'undefined') {
    console.log(`non il n'est pas ${theNumber3}`)
}else {
    console.log(`oui il est ${theNumber3}`)
}

// ----------------------------

let myBank = 500;
let myCart = 100;


// (myBank < myCart)
// (myBank <= myCart)
// (myBank > myCart)
// (myBank >= myCart)

if (myBank > myCart) {
    console.log("paiment effectué avec succes")
}else{
    console.log('fond insuffisant')
}
// ------------------------

let timeIs = 14

if (timeIs >=0 && timeIs <= 6) {
    console.log(`il est ${timeIs}h tu as vue l'heure qu'il est ...`)
}else if (timeIs > 6 && timeIs <= 12){
    console.log(`il est ${timeIs}h c'est encour le matin`)
}else if (timeIs > 12 && timeIs <= 14){
    console.log(`il est ${timeIs}h emily manaaareee`)
}else if (timeIs > 14 && timeIs <= 17){
    console.log(`il est ${timeIs} h c'est l'aprés-midi`)
}else if (timeIs > 17 && timeIs <= 20){
    console.log(`il est ${timeIs}h bonne soirée`)
}else if (timeIs > 20 && timeIs <= 23){
    console.log(`il est ${timeIs}h bonne Nuit`)
}else {
    console.log('heure invalide')
}
//---------------------------

let sum = 100
let payementMethod = 'cheque'

switch (payementMethod) {
    case 'espace':
        console.log(`vous souhaitez payer la somme de ${sum}eureus en ${payementMethod}`)
        break;
    case 'carte':
        console.log(`vous souhaitez payer la somme de ${sum}eureus en ${payementMethod}`)
        break;
    case 'cheque':
        console.log(`vous souhaite payer la somme de ${sum}eureus en ${payementMethod}`)
        break;
        default:
            console.log("veuillez selectionner un mode de paiement SVP!!!")
            break;
            
}

const myFruitsArray = ['pomme', 'poire', 'abricot', 'fraise', 'kiwi'];
let myChoice = 0
let fruit;
switch (myChoice) {
    case 0:
        fruit = `La ${myFruitsArray[0]}`
        break;
    case 1:
        fruit = `La ${myFruitsArray[1]}`
        break;
    case 2:
        fruit = `L' ${myFruitsArray[2]}`
        break;
    case 3:
        fruit = `La ${myFruitsArray[3]}`
        break;
    case 4:
        fruit = `Le ${myFruitsArray[4]}`
        break;                                    
}