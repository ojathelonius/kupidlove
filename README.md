# Kupidlove

## Installation d'Expo

Sous Windows, il suffit d'utiliser `npm install exp -g`.

Sous Linux il semble y avoir un [problème avec ngrok](https://github.com/inconshreveable/ngrok/issues/429) à l'installation d'Expo et il vaut mieux utiliser :

`yarn global add ngrok` puis `yarn global add exp`

Sous Ubuntu plus particulièrement, il est nécessaire de préciser l'emplacement d'installation :

`sudo yarn global add exp --modules-folder /usr/lib/node_modules`

## Lancement

Installer les dépendances avec `npm install` ou `yarn install`.

### Avec Expo XDE

Utiliser [Expo XDE](https://docs.expo.io/versions/latest/introduction/installation.html) pour lancer l'application.

### Avec le CLI exp

`sudo exp start`

## Troubleshoot

### Chargement du bundle infini
Désactiver le remote debugging sur le mobile. Si il n'arrive pas à y accéder (ex : CORS interdit), il ne buildera pas l'application.

### Unexpected token '...' dans AppEntry.bundle
Il y a probablement un élément dans un composant utilisé avec un opérateur destructurant (...) utilisé sur un objet primitif.

`{...this.props.value}` renvoie une erreur si value est de type primitif.

### Impossible d'accéder aux redux-devtools depuis Chrome
Utiliser l'extension [Allow CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).