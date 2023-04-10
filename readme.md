# Dashboard Project OCRES 2022

Ce projet est un dashboard Spotify qui permet d'accéder aux informations d'un compte (playlists, abonnements...).

Présentation en vidéo sur ce lien : https://clipchamp.com/watch/DvyDI5O9cCD \
Mock-up sur Figma : https://www.figma.com/file/7EkDUzG2sDJksveuBgi91m/Projet-Web-Shelly-%26-Chlo%C3%A9?node-id=0%3A1&t=ARxZ21ssvR0DK2cQ-1 

## Pour se connecter à Spotify

Pour pouvoir vous connecter à Spotify, vous allez devoir vous rendre sur le lien suivant : https://developer.spotify.com/documentation/web-api/ \
Cliquez sur `Dashboard` et connectez-vous à Spotify.\
Vous allez maintenant créer une app en cliquant sur `Create an app`.\
Choisissez un nom et une description.\
Cliquez sur `Edit Settings`. Dans la partie `Redirect URIs`, ajoutez `http://localhost:3000` et cliquez sur `Add` puis `Save` en bas.\
Enfin, copiez le `Client ID` en haut de la page. Dans le fichier `spotify.js`, collez votre Client ID dans la variable `const clientId`.

Vous pourrez maintenant vous connecter à Spotify !

## Pour la partie back-end

Ouvrir un terminal Git Bash.\
Se placer dans le dossier server : `cd server`

### A installer avant de commencer

#### dépendances
Installer les modules : `npm install`

#### mongoose
_Pour utiliser MongoDB_
Installer les modules : `npm install mongoose`

### Lancer l'app

Lancer l'application : `npm start`

## Pour la partie front-end

Ouvrir un terminal Git Bash.\
Se placer dans le dossier web : `cd web`

### A installer avant de commencer

#### dépendances
Installer les modules : `npm install`

#### react-router-dom
_Pour se déplacer entre les différentes pages_\
Installer : `npm install react-router-dom`

#### react-icons
_Pour les icones de la navbar_\
Installer : `npm install react-icons`

#### axios
Installer : `npm i axios`

### Lancer l'app

Lancer l'application : `npm start`
