// recuper ce élement
let body = document.getElementsByTagName('body')[0]
console.log(body)

//creer un element ici je choisis balis (h1)
let newH1  = document.createElement('h1')

//donner des attrubuts a nos element (2 methodes ici)
newH1.className = 'myH1'
//ou
newH1.setAttribute('id', 'myH1')

//ecrire dans l'element (2 methode)
newH1.innerText = 'jak' 
//noter que l'element n'est pas encore vidible car nous n'avons pas specifié ou est ce que nous souhaitions inderer l'element

//voila comment lut specifier
body.appendChild(newH1)