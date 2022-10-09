//La méthode querySelector() de l'interface Document retourne le premier Element dans le document 
let link = document.querySelector('.link')
console.log(link)

let element;

element = link.className
element = link.classList
element = link.classList[1]
link.classList.add('cedric')
link.classList.remove('link')

link.id = 'myNewId'

link.id = ''
element = link.removeAttribute('id')
element = link.getAttribute('class')
element = link.getAttribute('href')
element = link.setAttribute('href', 'http://www.google.com')
 element = link.setAttribute('target', 'enw')
 element = link.hasAttribute('target', '_blank')