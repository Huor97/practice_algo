<?php
// //************************** afficher idantiter étudian avec son note
// $pernom = 'Rouh';
// $nom = 'ka';
// $note1 = 10;
// $note2 = 20;
// echo 'Bonjour'.' '. "$pernom $nom",' ','vous avez eu',' ', ($note1 + $note2)/2 ,' ', 'de moyenne!',"\n"; 

// $noteResulta = ($note1 + $note2)/2;
// echo "Bonjour $pernom $nom vous avez eu $noteResulta de moyenne";

// //*************************************************************** tableau et objet

// $tableux = [1, 2, 'trois'];
// print_r ($tableux[1]);
// $classes = [
//     [
//         'prenom' => 'ali',
//         'nom' => 'ahmadi',
//         'notes' => [10, 20, 15]
//     ],
//     [
//         'prenom' => 'zahra',
//         'nom' => 'gholami',
//         'notes' => [11, 17, 20]  
//     ]   
//     ];

//     echo "\n",'note:',' ', $classes[1]['notes'][2];

// //******************************************************************* condition
// $heures = (int) readline('Entrez une heure:');

// if ((9 <= $heures && 12 >= $heures)||(14 <= $heures && 17 >= $heures)) {
//     echo 'c\'est ouvert magazas ';
// } else {
//     echo 'les magazas sont férmer';
// }

// /**
//  * vrai && vrai = vrai
//  * vrai && faux = faux
//  * faux && faux = faux
//  * vrai || vrai = vrai
//  * vrai || faux = vrai
//  * faux || faux = faux
//  */


// $action = (int) readline('Entrez vote action: (1: attaquer, 2: defandre, 3: passer mon tour): ');

// switch($action){
//     case 1: 
//         echo 'j\'attaque';
//         break;
//     case 2:
//         echo 'je defandre';
//         break;
//     case 3:
//         echo 'passer car je ne faiis rien je ne suis pas en gere avec vous =^^= 😣'; 
//         break;
//         default:
//         echo 'erreur on ne trouve pas';
// }

// // ********************************************************** boucl

// $scoreList = array('Lily' => 2, 'Marc' => 8, 'Virgnie' => 12, 'Paul' => 14);
 
// foreach ($scoreList as $class => $eleve){
//      if( $eleve >= 10){
//          echo "$class "." a une note au dessus de la moyenne\n";
//       }else{
//           echo "$class "." a une note en dessous de la moyenne\n";
//      } 
//  }

// //  Instructions : Dans le tableau de résultat d'un examen, faire une boucle qui va permettre de récupérer l'index dans $key et la valeur dans $value.
// // Si la personne à 10 ou plus afficher "le prénom a une note au dessus de la moyenne". Sinon afficher "le prénom a une note en dessous de la moyenne"
// // Changer le prénom par le prénom de la personne. Il est inutile de revenir à la ligne ou de séparer les phrases

// // Date:05/06/2021.
// /**
//  * Demander à utilisateur de rentrer une note ou de taper "fin"
//  * Chaque note est souvegarder dans une tableau note.
//  * A la fin on affiche le tableau de note sous forme de liste.
//  */
// $rendreUneNote = null;
// $tablNote = [];
// // Tantque utilisateur ne tape pas fin
// while ($rendreUneNote !== 'fin'){
//     $rendreUneNote = readline('rentrer une note ou de tapez \'fin\' : ');
//     // on ajoute la note tapée au tableau notes
//     if ($rendreUneNote !== 'fin') {
//         $tablNote[] = (int) $rendreUneNote;
//     }
// }

// //pour chaque note dans notes
// foreach($tablNote as $note){
//     // on affiche "-note"
//     echo '-' . $note . "\n";
// }

// /**
//  * On veut demander à utilisateur de rentrer les horaires d'ouverteur d'un magasin.
//  * On demander à utilisateur de rentrer une heure et on lui dire si le magasin est ouvert.
//  */

//  // On demande à l'utilisateur de rentrer un creneaux.
//       // On demande l'heure de début.
//       // On demande l'heure de fin.
//       // On verifie que l'heure de début est inférieur de l'heure de fin.
//       // on demande si on veux rajeuter un neuveux creneaux (o/n).
//  // On demande à l'utilisateur de rentrer une heure.
//  // On affiche l'état d'ouverteure de magasin.

//  $creneaux = [];

//  while(true){
//      $heureOuverteur = (int) readline('renter une heure d\'ouverteur svp :');
//      $heureFermeteur = (int) readline('rentrer une heure de férméteur svp :');
    
//      if($heureOuverteur >= $heureFermeteur){
//       echo "Le creneaux ne peut pas être enregistré car l'heure d'ouverteure ($heureOuverteur) est superieur à l'houre de ferméture ($heureFermeteur) ";     
//    }else {
//       $creneaux[] = [$heureOuverteur, $heureFermeteur];
//       $action = readline('vous voulaiz rentrer un autre heuraire? (o/n)');
//       if($action === 'n'){
//          break;
//       }
//    }
// }
// $heure = (int) readline("A quelle heure voulez vous visiter le magasin? ");
// $creneauxTrouver = false;
// foreach ($creneaux as $creneau){
//    if($heure >= $creneau[0] && $heure <= $creneau[1]){
//       $creneauxTrouver = true;
//       break;
//    }
// }

// if ($creneauxTrouver){
//    echo "Le magasin sera ouvert";
// }else{
//    echo "Désolé le magasin sera fermé :(";
// }
// // *************************************************************** fonction
// echo "----------------------------------------------- \n";

// // crée une programe qui trouve le palyndrome, c'est une dire que linvers de mot la même 
// // input : kayak
// // output : kayak
// $mot = "Kayak";
// // la methode pour minusculer une string
// $motMinuscule = strtolower($mot);
// // la methode pour inverser une châne de caracter
// $invers = strrev($motMinuscule);
//     if($mot === $invers){
//         echo "ce mot est un palyndrome";
//     }else {
//         echo "ce mot n'est pas un palyndrome";
//     }
// var_dump($invers);
// echo "----------------------------------------------- \n";
// // trouver les moyens 
// // avoir les somme deviser par deux
// $notes = [13, 10, 15];
// // la methode pour avoir les sommes d'une tableux
// $some = array_sum($notes);
// // compte tous les éléments 
// $comptSome = count($notes);
// // la methode round = arroundire après flotant d'un nombre 12.67.....
// var_dump(" vous avez " . round($some / $comptSome, 2) . " de moyens ");
// echo "----------------------------------------------- \n";
// rser = array_reverse($tablNombre);
// // la methode pour trie un tableau et il nos envoye un boolean 
// $trieTabl = sort($tablNombre);
// print_r($ajuteNombre); // 2 5 13
// print_r($tablInverser); // 13 5 2
// print_r($trieTabl); // 1 2 5 13
// echo "----------------------------------------------- \n";

// while (true){
//     $motRentre = readline("rentre une phrase si vous ne rentre rien vous sorter de perograme : ");
//     if ($motRentre === ''){
//         // la methode pour terminer le scripte courant 
//         exit ("fin de programe");
//     }else {
//         echo "$motRentre \n";
//         break;
//     }
// }
// echo "----------------------------------------------- \n";

// $insultes = ['merde', 'con',];
// $phraseRentrer = readline("Entrez une phrase : ");
// foreach($insultes as $insulte){
//     // Calcule la taille d'une chân
//     $taill = strlen($insulte);
//     // La methode pour répéter une chân
//     $replace = str_repeat('*', $taill);
//     // La methode pour remplacer touts les occurence dans un chân
//     $phraseRentrer = str_replace($insulte, $replace, $phraseRentrer);
// }
// echo $phraseRentrer;
// echo "----------------------------------------------- \n";

// $tabInsultes = ['merde', 'con'];
// $strisque = [];
// foreach($tabInsultes as $tabInsulte){
//     // La methode substr est pour rtourne une partie d'un string
//     $strisque[] = substr($tabInsulte, 0 ,1) . str_repeat("*", strlen($tabInsulte)-1);
//     var_dump($strisque);
// }
// $phrase = readline("Entrez une phrase qui est bien : ");
// $phrase = str_replace($tabInsultes, $strisque, $phrase);
// echo $phrase;

// /**
//  * 3 fonction pour les acions d'un magasin 
//  * 1e pour demander à utilisatuer de choisir ses créneaux.
//  * 2e pour demander à utilisateur, est qu'il veux continuer d'ajuter en cours des créneaux avex oui ou non.
//  * 3e pour merger les deux fonction avant et afficher resulta.
//  * Cette algoritme est pour les heurers ouvertes et fermer d'un magasin. 
//  */
// echo "----------------------------------------------- \n";
// // Une fonction qui demande à utilisateur de choisire les heurer
// function demander_creneau($phrase = "Veuilez entrer un creneau: "){
//     echo $phrase . "\n";
//     while (true){
//         $ouverteur = (int) readline("Houre d'ouverteur : ");
//         if($ouverteur > 0 && $ouverteur < 23){
//             break;
//         }
//     }
//     while (true){
//         $fermeteur = (int) readline("Houre de fermeteur : ");
//         if($fermeteur > 0 && $fermeteur < 23 && $fermeteur > $ouverteur){
//             break;
//         }
//     }
//     return [$ouverteur, $fermeteur];
// }
// // $creneau = demander_creneau();
// // $creneau2 = demander_creneau("vouillez entrer votre creneau : ");
// // var_dump($creneau, $creneau2);
// echo "----------------------------------------------- \n";

// // Une fonction qui demande à utilisateur de chosir avec oui ou non 
// function repondre_oui_non ($phrase){ 
//     while (true){
//         $reponse = readline($phrase . " - (o)ui/(n)on \n");
//         if ($reponse === 'o'){
//             return true;
//         }elseif ($reponse === 'n'){
//             return false;
//         }
//     }  
// }
// // $resultat = repondre_oui_non('Voulez-vous continuer ?');
// // si utilisateur taper "o" => true
// // si utilisateur taper "n" => false
// // si utilisateur taper autre chose alors redemande
// // var_dump($resultat);
// echo "----------------------------------------------- \n";

// function demander_creneaux($phrase = 'Veuillez entrer vos créneaux : '){
//     $creneaux = [];
//     $continuer = true;
//     while($continuer){
//         $creneaux[] = demander_creneau();
//         $continuer = repondre_oui_non('Voulez-vous continuer ?');
//     }
//     return $creneaux;
// }

// $creneaux = demander_creneaux("Entrez vos créneaux :");
// var_dump ($creneaux);

// // **************************************************** include et requir
// /**
//  * qe'est ce que c'est include et requir?
//  * les deux c'est un peut la même choses juste la diffrent est pandant executions.
//  * Dabord qu'est font les deux: en simple si on vaut utliser une fonction dans un autre fichier aves ces deux fonction qu'on peut le fair
//  * les différentes si on rencontre des erreur après include donc il n'affiche rien le contunu mais requir il affiche seul diférentes.
//  */

// require '7fonctions_utilisateurs.php';

// // si on veut utiliser une fonction espesifique dans ce fichier 7fonctions-utilisateurs donc on dois effectuer après le chomin de fichier.
// // exemple :
// var_dump (repondre_oui_non('test'));
// $tablNombre = [2, 5, 1, 8];
// // la methode pour empiler les valeur à la fin d'un tableau
// $ajuteNombre = array_push($tablNombre, 13);
// // la methode pour inverser une tableau
// $tablInverser = array_reverse($tablNombre);
// // la methode pour trie un tableau et il nos envoye un boolean 
// $trieTabl = sort($tablNombre);
// print_r($ajuteNombre); // 2 5 13
// print_r($tablInverser); // 13 5 2
// print_r($trieTabl); // 1 2 5 13
// echo "----------------------------------------------- \n";

// while (true){
//     $motRentre = readline("rentre une phrase si vous ne rentre rien vous sorter de perograme : ");
//     if ($motRentre === ''){
//         // la methode pour terminer le scripte courant 
//         exit ("fin de programe");
//     }else {
//         echo "$motRentre \n";
//         break;
//     }
// }
// echo "----------------------------------------------- \n";

// $insultes = ['merde', 'con',];
// $phraseRentrer = readline("Entrez une phrase : ");
// foreach($insultes as $insulte){
//     // Calcule la taille d'une chân
//     $taill = strlen($insulte);
//     // La methode pour répéter une chân
//     $replace = str_repeat('*', $taill);
//     // La methode pour remplacer touts les occurence dans un chân
//     $phraseRentrer = str_replace($insulte, $replace, $phraseRentrer);
// }
// echo $phraseRentrer;
// echo "----------------------------------------------- \n";

// $tabInsultes = ['merde', 'con'];
// $strisque = [];
// foreach($tabInsultes as $tabInsulte){
//     // La methode substr est pour rtourne une partie d'un string
//     $strisque[] = substr($tabInsulte, 0 ,1) . str_repeat("*", strlen($tabInsulte)-1);
//     var_dump($strisque);
// }
// $phrase = readline("Entrez une phrase qui est bien : ");
// $phrase = str_replace($tabInsultes, $strisque, $phrase);
// echo $phrase;

// /**
//  * 3 fonction pour les acions d'un magasin 
//  * 1e pour demander à utilisatuer de choisir ses créneaux.
//  * 2e pour demander à utilisateur, est qu'il veux continuer d'ajuter en cours des créneaux avex oui ou non.
//  * 3e pour merger les deux fonction avant et afficher resulta.
//  * Cette algoritme est pour les heurers ouvertes et fermer d'un magasin. 
//  */
// echo "----------------------------------------------- \n";
// // Une fonction qui demande à utilisateur de choisire les heurer
// function demander_creneau($phrase = "Veuilez entrer un creneau: "){
//     echo $phrase . "\n";
//     while (true){
//         $ouverteur = (int) readline("Houre d'ouverteur : ");
//         if($ouverteur > 0 && $ouverteur < 23){
//             break;
//         }
//     }
//     while (true){
//         $fermeteur = (int) readline("Houre de fermeteur : ");
//         if($fermeteur > 0 && $fermeteur < 23 && $fermeteur > $ouverteur){
//             break;
//         }
//     }
//     return [$ouverteur, $fermeteur];
// }
// // $creneau = demander_creneau();
// // $creneau2 = demander_creneau("vouillez entrer votre creneau : ");
// // var_dump($creneau, $creneau2);
// echo "----------------------------------------------- \n";

// // Une fonction qui demande à utilisateur de chosir avec oui ou non 
// function repondre_oui_non ($phrase){ 
//     while (true){
//         $reponse = readline($phrase . " - (o)ui/(n)on \n");
//         if ($reponse === 'o'){
//             return true;
//         }elseif ($reponse === 'n'){
//             return false;
//         }
//     }  
// }
// // $resultat = repondre_oui_non('Voulez-vous continuer ?');
// // si utilisateur taper "o" => true
// // si utilisateur taper "n" => false
// // si utilisateur taper autre chose alors redemande
// // var_dump($resultat);
// echo "----------------------------------------------- \n";

// function demander_creneaux($phrase = 'Veuillez entrer vos créneaux : '){
//     $creneaux = [];
//     $continuer = true;
//     while($continuer){
//         $creneaux[] = demander_creneau();
//         $continuer = repondre_oui_non('Voulez-vous continuer ?');
//     }
//     return $creneaux;
// }

// $creneaux = demander_creneaux("Entrez vos créneaux :");
// var_dump ($creneaux);

// // **************************************************** include et requir
// /**
//  * qe'est ce que c'est include et requir?
//  * les deux c'est un peut la même choses juste la diffrent est pandant executions.
//  * Dabord qu'est font les deux: en simple si on vaut utliser une fonction dans un autre fichier aves ces deux fonction qu'on peut le fair
//  * les différentes si on rencontre des erreur après include donc il n'affiche rien le contunu mais requir il affiche seul diférentes.
//  */

// require '7fonctions_utilisateurs.php';

// // si on veut utiliser une fonction espesifique dans ce fichier 7fonctions-utilisateurs donc on dois effectuer après le chomin de fichier.
// // exemple :
// var_dump (repondre_oui_non('test'));
?>
