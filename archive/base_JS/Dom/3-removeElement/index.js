'use strict'
let ul = document.getElementById('list')
ul.children[1].remove()

let ul2 = document.getElementById('list2')
ul2.children[2].remove()


let div = document.querySelector('div')
let link = document.querySelectorAll('.link')

div.removeChild(link[4])
console.log(div);
console.log(link);