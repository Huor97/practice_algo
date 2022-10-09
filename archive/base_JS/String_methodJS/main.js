const someWords = "j'apprend js aujourd'hui ...";
//console.log(soneWords)

let method;
//method length
method = someWords.length;
console.log(typeof method)
// method concat
method=someWords.concat('et', 'plus', 'encoure')
console.log(method)

// exo:

/*const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);*/

myArray = ["zz","ee",22,"4","5","6","7","8","9","10","BOBO","","po,àçij"," "," "," ","","","","",]

let myArray1= myArray[0];
let myArray2= myArray[1];
let myArray3= myArray[2];
let myArray4= myArray[3];
let myArray5= myArray[4];
let myArray6= myArray[5];
let myArray7= myArray[6];
let myArray8= myArray[7];
let myArray9= myArray[8];
let myArray10= myArray[9];
let myArray11= myArray[10];
let myArray12= myArray[11];
let myArray13= myArray[12];
let myArray14= myArray[13];
let myArray15= myArray[14];
let myArray16= myArray[15];
let myArray17= myArray[16];
let myArray18= myArray[17];
let myArray19= myArray[18];

let msg = "";
msg = msg.concat(myArray1,myArray2,myArray3,myArray15)
console.log(msg)

console.log("-----------------------")

var phrase1 = "hello World";
var phrase2 = "Hello World";

console.log("toLowerCase :",phrase1.toLowerCase())
console.log("toUpperCase :",phrase2.toUpperCase())
console.log("-----------------------")

var email = "rouh.ee@gmail.com"
//console.log(email.indexOf("p"))
//console.log(email.indexOf("@"))
console.log("-----------------------")

if (email.indexOf("@")>=0) {
    console.log('Adresse mail VALIDE')
}else{
    console.log('Adresse mail INVALIDE')
}

console.log("------------------------------")

console.log(email.includes("a"))

let recup = someWords.substring(0,someWords.length)
console.log(recup)

console.log("------------------------------")
console.log(someWords.slice(1, 6))
console.log("------------------------------")
let takeIt = someWords.split(" ")

console.log(takeIt)
console.log("------------------------------")

let changeIt = someWords.replace("aujourd'hui", "demain")
console.log(changeIt)