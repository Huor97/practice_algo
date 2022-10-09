function couleur() { 
    var objet1 = document.getElementById("saisie") ;
    var objet2 = document.getElementById("div1") ; 
    objet2.style.backgroundColor = objet1.value; 
    if (objet1.value == ""){
        alert("choisis votre couleur rapidement si non tu es un conarad");
    }else {
        alert("c'est bien tu comprndre quandmême");
    }
}