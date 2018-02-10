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
Il y a probablement un élément {this.props.x} utilisé directement dans un component.