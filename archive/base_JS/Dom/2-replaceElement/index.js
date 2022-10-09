// 1. je cree mon element
let newElement = document.createElement('li')
// 2. je cree un texte
let newText = document.createTextNode("Coucou je vien d'arriver")
// 3. je lui insere le texte
newElement.appendChild(newText)
// 4.je recupere mon parent(ul)
let ul = document.getElementById('list')
// 5.je selectionne l'enfant que je souhaite remplacer (2 methodes)
//let oldElement = ul.children[1]
// let oldElement document.getElemntById('list).children[1]
// 6. a partir du parent je lui remplace l'ancien element par le nouvel element
ul.replaceChild(newElement, oldElement)
//--------------deuxieme facon avec text content-----------------
// 1. je cree mon element
let newElement2 = document.createElement('li')
// 2. je cree un texte
newElement2.textContent ="Coucou je vien d'arriver une fois de plus"
// 3. je lui insere le texte
let ul2 = document.getElementById('list2')
// 4.je selectionne l'enfant que je souhaite remplacer (2 methodes)
let oldElement2 = ul2.children[1]
// let oldElement document.getElemntById('list).children[1]
// 5. a partir du parent je lui remplace l'ancien element par le nouvel element
ul2.replaceChild(newElement2, oldElement2)
