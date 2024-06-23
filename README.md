# Application E-commerce avec Symfony 6.4, React.js et Stripe

Cette application web e-commerce permet la gestion des produits, l'ajout de produits dans le panier et le passage au paiement via Stripe. Elle utilise Symfony pour la partie back-end et React.js (React/ux) pour la partie front-end.

## Technologies Utilisées

### Backend
- **Symfony 6.4**
- **MySQL**

### Frontend
- **React.js**
- **Tailwind CSS**
- **Webpack**
- **TypeScript**
- **JavaScript (ES6)**

## Bundles Utilisés

- **VichUploaderBundle**
- **ReactBundle**
- **StimulusBundle**
- **WebpackEncoreBundle**
- **EasyAdminBundle**
- **stripe/stripe-php**

## Dépendances Node.js

- **@symfony/ux-react**
- **symfony/webpack-encore**
- **@mui/material**

## Prérequis

- PHP 8.0 ou supérieur
- Composer
- Node.js et npm
- MySQL

## Installation

1. Clonez le projet :
    ```bash
    git clone [URL_du_dépôt]
    cd [nom_du_projet]
    ```

2. Installez les dépendances Symfony :
    ```bash
    composer install
    ```

3. Installez les dépendances Node.js :
    ```bash
    npm install
    ```

4. Configurez la base de données et Stripe dans le fichier `.env` :
    ```env
    APP_ENV=dev
    APP_SECRET=e82c679c2dd7f465ded1304502c0ecfb

    ###< symfony/framework-bundle ###

    ###> doctrine/doctrine-bundle ###
    DATABASE_URL="mysql://root:@127.0.0.1:3306/db-sf-reactjs-ecommerce"
    ###< doctrine/doctrine-bundle ###

    STRIPE_API_KEY=
    STRIPE_API_SECRET=
    ```

5. Exécutez les migrations de la base de données :
    ```bash
    php bin/console doctrine:migrations:migrate
    ```

6. Démarrez le serveur de développement :
    ```bash
    symfony server:start
    npm run dev
    ```

## Utilisation

- Accédez à l'interface de gestion des produits via EasyAdmin.
- Ajoutez des produits à votre panier.
- Procédez au paiement sécurisé via Stripe.

## Contributions

Les contributions sont les bienvenues. Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer.


