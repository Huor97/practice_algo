// fonction principale
function sortByValueAndIndex(array) {
    let tProduit = produit(array);
    let tProduitTri = triTableau(tProduit);
    let matrice = changerOrdre(tProduit, tProduitTri);
    let t2 = triParMatrice(matrice, array);
    console.log(t2);
  
    return "cacher";
  }
  sortByValueAndIndex([-18, , -26, 0, 25]);
  // sortByValueAndIndex([-18, -26, 0, 25]);
  
  // **************************** fonction gestion d'erreur:
  // function gestionErreur(array) {
  //   let bool = true;
  //   let x = array;
  //   try {
  //     let i = 0;
  //     while (i <= x.length) {
  //       if (isNaN(x[i])) throw x[i] + "' n'est pas un nombre";
  
  //       i++;
  //       return x;
  //     }
  //   } catch (err) {
  //     bool = false;
  //     return "La valeur '" + err;
  //   }
  //   return bool;
  // }
  
  // **************************** fonction produit
  function produit(tableauEntree) {
    let taille = tableauEntree.length;
    let tableauSortie = Object.values(tableauEntree);
  
    for (let i = 0; i < taille; i++) {
      // le compteur est à la fois index, nombre(pour position) puis index.
      // tableauSortie[i] = (i + 1) * tableauSortie[i];
      if (isNaN(tableauSortie[i])) {
        tableauSortie[i] = 1;
        console.log(tableauSortie, "hh");
      } else {
        tableauSortie[i] = (i + 1) * tableauSortie[i];
      }
    }
  
    return tableauSortie;
  }
  
  // ****************************** fonction tri d'un tableau
  function triTableau(tablProduit) {
    let tablProduitSortie = Object.values(tablProduit);
    let compteur1 = 0;
    let compteur2 = 0;
    let echange = 0;
  
    do {
      compteur2 = compteur1 + 1;
      do {
        if (tablProduitSortie[compteur1] > tablProduitSortie[compteur2]) {
          echange = tablProduitSortie[compteur1];
          tablProduitSortie[compteur1] = tablProduitSortie[compteur2];
          tablProduitSortie[compteur2] = echange;
        }
        compteur2 = compteur2 + 1;
      } while (compteur2 < tablProduitSortie.length);
      compteur1 = compteur1 + 1;
    } while (compteur1 < tablProduitSortie.length - 1);
  
    return tablProduitSortie;
  }
  
  // ************************** fonction changer l'ordre
  function changerOrdre(t1, t2) {
    let i = 1;
    let j;
    let matrice = [[]];
    let continuer;
  
    while (i <= t1.length) {
      j = 1;
      continuer = true;
      while (j <= t2.length && continuer) {
        if (t1[i - 1] === t2[j - 1]) {
          matrice[i - 1] = [i, j];
          continuer = false;
        }
        j = j + 1;
      }
      i = i + 1;
    }
    return matrice;
  }
  
  // fonction tri par matrice
  function triParMatrice(matrice, t1) {
    let i = 0;
    let tablFinal = [];
  
    while (i < matrice.length) {
      tablFinal[matrice[i][1] - 1] = t1[matrice[i][0] - 1];
  
      i = i + 1;
    }
    return tablFinal; // [2,4,3,6]
  }
  