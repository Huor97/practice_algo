# Introduction à React/Next

Ce document est écrit en MarkDown (extension de fichier .md).

Le MarkDown est un langage de mise en page beaucoup utilisé pour les documentations techiques.

https://www.markdownguide.org/cheat-sheet/

## Qu'est-ce que ReactJS ?

React est un framework JavaScript qui permet de créer des sites web dynamiques. React a été créé et est entretenu par Facebook.

Il existe d'autres frameworks JS Front-End : Angular (Microsoft), VueJS, Svelte, ... React est aujourd'hui celui le pus demandé sur le marché de l'emploi.

### Un framework JS, qu'est-ce que c'est ?

Un framework JS est un outil qui permet de créer des projets, utilisant le language JavaScript pour manipuler directement les éléments de la page web.

Avant les framework (c'est encore beaucoup utilisé aujourd'hui), on créait des fichier javascripts sépaérés qu'on reliait au HTML directement (avec la balise script).

Avec un framework, on va pouvoir utiliser la puissance de javascript directement dans le projet pour interagir avec la page. Cela permet notamment de gérer des projets plus complexes.

### Et React, comment ça marche ?

Comme on l'a vu plus tôt, React est un framework JS parmis d'autres. Ce que fait React est de créer une couche qui permet au Javascript d'interagir avec le DOM. Ainsi, on va pouvoir créer, modifier, supprimer avec nos componsants (fonctions ou classes) React du HTML et du CSS.

## Qu'est-ce que NextJS ?

NextJS est un framework React !

### Les frameworks React

Quoi, un framework React ? Afin d'utiliser React, il ya plusieurs manières. Il existe plusieurs frameworks qui sont des couches supplémentaires qui permettent d'utiliser React. Il existe notamment :

- create-react-app , créé etentretenu par Facebook ;
- Gatsby ;
- NextJS.

### Contraintes de React (client-side rendrering)

React est rapide, et c'est très bien. Seulement, dans sa manière de fonctionner, il pose un gros problème.

En effet, create-react-app fonctionne sur le principe du client-side rendering (CSR). Qu'est-ce que cela veut dire ? Cela veut dire que notre serveur envoie au navigateur des utilisateurs un gros paquet de javascript. Ensuite, sur le navigateur (chrome, mozilla, ...), le Javascript va s'exécuter pour construire la page.

Le problème, c'est que la page HTML n'est pas directement accessible. Il faut passer par l'étape de la construction. Le problème, c'est que l'algorithme de Google a du mal à analyser cela.

Pour le SEO (search engine optimization --> comment Google référence notre page web), le mieux est d'avoir directement des pages HTML. C'est ici qu'intervient NextJS.

### Pourquoi NextJS ? Le server-side rendering (SSR)

NextJS utilise toutes les fonctions de React. Seulement, il permet en plus de constuire les pages, non par le client (CSR),mais sur le serveur directement (SSR).

Il fait tourner React sur le serveur pour construire lespages, et pouvoir envoyer directement du HTML aux clients. Ainsi, on obtient de meilleures performances ainsi qu'un meilleur SEO.

Nous utilisons NextJS car HelloGolf est un site marchand. Il est indispensable d'être bien répertorié sur Google.

## Initialiser un projet NextJS

Avec le terminal, se placer dans le dossier où on veut créer son nouveau projet.

Utiliser la commande `npx create-next-app [nom de ton projet]`.

Exemple : `npx create-next-app hellogolf_backoffice`.
