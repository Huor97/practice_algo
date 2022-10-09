"use strict"
//console.log(window)


//sélecteur javascript par valeur d'attribut id
//document.getElementById()
let test = document.getElementById("test");
console.log(test)

let mesH2 = document.getElementsByTagName("h2")
console.log(mesH2)
console.log(mesH2[0])
console.log(mesH2[1])
console.log(mesH2[2])

let test2 = test.getElementsByTagName("h2")
console.log(test2)

let nameAttribute = document.getElementsByName("jak")
console.log(nameAttribute)
console.log(nameAttribute[1])
console.log(nameAttribute[1].innerHTML)
console.log(nameAttribute[1].innerText)

let coucou = document.querySelector("body>#test>#coucou")
console.log(coucou)

let coucou2 = document.querySelector("h2")
console.log(coucou2)

let coucou3 = document.querySelector(".container")
console.log(coucou3)

let coucou4 = document.querySelector("h2")
console.log('---------',coucou4)

let coucou5 = document.querySelector(".myClass")//avec classe (.) qui recuper l'element
console.log(coucou5)

let coucou6 = document.getElementsByName("jak")
console.log('-----------',coucou6)//recupére le paragraph
console.log('-----------',coucou6[0])//recuper que cette tebleu
console.log('-----------',coucou6[1])//recuper que cette tableu
console.log('-----------',coucou6[0].innerText)//recupére just le text de paragraph

console.log("--------------suite------------")
let header = document.getElementsByTagName('header')

let elements = header
console.log(elements)
elements = header[0]
console.log(elements)
elements = header[0].children[0]
console.log(elements)
elements = header[0].lastElementChild
console.log(elements)
elements = header[0].firstElementChild
console.log(elements)
elements = header[0].childElementCount
console.log(elements)
elements = header[0].parentNode
console.log(elements)
elements = header[0].parentNode.parentNode
console.log(elements)
