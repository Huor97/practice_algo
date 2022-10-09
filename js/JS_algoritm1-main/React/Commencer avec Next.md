# Commencer avec Next

Initialiser le projet avec la commande `npx create-next-app [nom de l'app]`

Puis, ouvrir le dossier (conseil : dans le terminal, utiliser la commande `code [nom du dossier` pour ouvrir le dossier dans VS Code).

On va ensuite découvrir un boilerplate de Next. Un boilerplate est une préconfiguration de projet, avec une structure minimale déjà mise en place.

## Structure d'un projet

### Structure imposée par Next

#### 1- Le dossier `pages`

Ce dossier est le plus important. C'est ici que se situent les différentes pages du site web.

Le fichier `_app.js` est un fichier spécial dans NextJS. Le fichier app est celui qui lance le site dans son intégralité, et est commun à toutes les pages.
Si on doit utiliser des choses pour toute l'application, c'est dans ce dossier que cela se passe.
Exemple : si je veux utiliser GraphQl dans toute mon application, il suffit de le paramétrer au niveau du fichier `_app.js`.

La page d'accueil est située dans `index.js`.

Puis, pour chaque fichier dans le dossier `pages`, on va retrouver une page à l'URL correspondant. Nom de page = chemin URL.

#### 2- Le dossier public

Le dossier `public` est celui qui gère tous les assets (images, fonts, ....).

Avec NextJS, il est très facile d'indiquer le chemin d'un asset (images, audio, fonts, ...).

Quand on utilise une src pour une image par exemple, il suffit d'indique `/[chemin à l'intérieur du dossier public]`.

Exemple : `/images/garlic.jpg`.

#### 3- Le dossier styles

Il permet d'héberger le CSS.

NextJS utilise un système de modules css (qui permet de fragmenter le CSS).

Nous n'allons pas l'utiliser car nous utiliserons `styled-components`.

### 4- node_modules

L'ensemble des packages JS utilisés dans le projet.

### 5 - Le fichier package.json

Ce fichier contient toutes les instructions pour télécharger les packages et éxécuter le projet Rect/Next correctement.

### Structure que j'utilise
