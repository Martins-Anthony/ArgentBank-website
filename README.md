# Argent Bank API - Implémentez le Front-End d'une Application Bancaire avec React

## Description du projet

Réalisation dans le cadre de ma formation d'intégrateur web chez OpenClassrooms.<br>

Ce projet consiste à développer le front-end d'une application bancaire en utilisant React et Redux pour offrir une expérience utilisateur dynamique et réactive.<br> 
En travaillant sur ce projet, j'ai intégré le front-end avec le back-end via des appels API, assurant une communication fluide entre le client et le serveur.<br>
L'application permet aux utilisateurs de se connecter, de gérer leur profil, et d'afficher des informations de compte de manière sécurisée.

Mon rôle a été de construire un tableau de bord utilisateur complet et responsive, d'utiliser Redux pour la gestion de l'état global de l'application, et d'intégrer les fonctionnalités de connexion avec un système d'authentification sécurisé.

## Objectifs du projet

- **Intégration front-end et back-end** : Développer le front-end en React et le connecter avec le back-end via des appels API REST.
- **Gestion de l'état avec Redux** : Utiliser Redux pour gérer l'état global de l'application, garantissant une cohérence des données à travers tous les composants.
- **Création d'une interface utilisateur responsive** : Construire un tableau de bord utilisateur complet et responsive pour une meilleure expérience utilisateur.
- **Utilisation de swagger pour documenter les API** : Utiliser Swagger pour définir et documenter les points d'accès API nécessaires pour la gestion des transactions et des profils utilisateurs.

## Fonctionnalités clés

- **Authentification des utilisateurs** : Mise en place d'un système d'authentification sécurisé permettant aux utilisateurs de se connecter et de se déconnecter.
- **Gestion des profils utilisateurs** : Les utilisateurs peuvent consulter et modifier certaines de leurs informations de profil après s'être connectés.
- **Intégration API** : Utilisation d'appels API pour récupérer et afficher les données des utilisateurs et des transactions.
- **Utilisation de Redux** : Implémentation de Redux pour gérer l'état de l'application et assurer la synchronisation des données entre les différents composants.
- **Adoption de bonnes pratiques de développement durable (green code)** : Optimisation des images et création de composants réutilisables pour minimiser l'empreinte écologique de l'application.

## Étapes de Développement

1. **Initialisation de l'Application** : Créer l'application avec Create React App et intégrer les pages statiques en HTML/CSS.
2. **Intégration de Redux** : Configurer Redux pour gérer l'état global de l'application.
3. **Gestion des Routes API** : Utiliser React Router pour naviguer entre les différentes pages et écrire des appels API pour l'authentification et la gestion des profils.
4. **Développement des Composants** : Créer des composants réutilisables pour les éléments de l'interface utilisateur, tels que les formulaires de connexion, les tableaux de transactions, et les profils utilisateurs.
5. **Optimisation de l'Interface** : Assurer que l'application est responsive et optimiser les performances, en suivant les bonnes pratiques du Green Code.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur de l'application.
- **Redux** : Gestionnaire d'état pour gérer et maintenir un état global cohérent dans l'application.
- **React Router** : Outil de gestion de la navigation pour créer une application single-page.
- **Swagger** : Outil de documentation pour définir les points d'accès API et modéliser les interactions avec les données des transactions.
- **Node.js** : Environnement d'exécution JavaScript côté serveur, utilisé pour les opérations back-end.
- **API REST** : Interface de programmation d'applications utilisée pour la communication entre le front-end et le back-end.

## Installation et lancement

### Prérequis

Pour exécuter ce projet, vous aurez besoin des éléments suivants :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Assurez-vous d'avoir les bonnes versions en utilisant ces commandes :

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions d'installation

1. Forkez ce dépôt sur votre compte GitHub.
2. Clonez le dépôt sur votre ordinateur local.
3. Ouvrez un terminal dans le répertoire du projet cloné.
4. Exécutez les commandes suivantes pour installer les dépendances et démarrer le serveur local :

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Le serveur sera accessible à http://localhost:3001, avec deux utilisateurs de test ajoutés à la base de données MongoDB.


5. exécuter le front-end, suivez ces étapes :
 
- Ouvrez un nouveau terminal dans le répertoire du projet cloné.
- Accédez au dossier du projet :
    ```bash
    cd front-end
    ```
- Installez les dépendances nécessaires :
    ```bash
    npm install
    ```
- Lancez l'application React :
    ```bash
    npm start
    ```
- Ouvrez un navigateur et accédez à http://localhost:3000 pour interagir avec l'application.

## Données des utilisateurs par défaut

Après l'exécution du script populate-db, les utilisateurs suivants seront ajoutés à la base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Documentation de l'API

La documentation de l'API peut être consultée une fois le serveur en fonctionnement à l'adresse suivante : http://localhost:3001/api-docs.

## Ressources de Design

Les maquettes HTML et CSS statiques sont disponibles dans le répertoire [/designs](https://github.com/Martins-Anthony/ArgentBank-website/tree/main/designs). 

Les wireframes pour les fonctionnalités dynamiques, telles que l'édition du nom d'utilisateur et la gestion des transactions, se trouvent dans [/designs/wireframes](https://github.com/Martins-Anthony/ArgentBank-website/tree/main/designs/wireframes).

## Auteur

- **Martins Anthony** - [Portfolio](https://webcraft-anthony.com/) - [GitHub](https://github.com/Martins-Anthony)
