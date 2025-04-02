import IMAGES from "../../public/images"
import {
    candyShopImg,
    goToTheMoonAndTravelAgencyImgs,
    CryptoProjectImgs,
    SpotifyProjectImgs,
    EcoProjectImgs,
    fullStackReactExpressProjectsImgs,
    NextsJsCloneProjectsImgs,
    NextsJsMovieAppImgs,
    reactNativeTypescriptImgs,
    reactNativeTypescriptAndReduxImgs,
    reactNativeTypescriptAndFirebase,
} from "./logos";

export const projectImgs = [
    {
        title: "Template responsive go to the moon",
        img: IMAGES.goToTheMoon,
        type: "Projet d'intégration",
        description: "Projet d'intégration responsive en Html5 et Css3",
        link: "https://mathieu94110.github.io/Go-to-the-moon-project/",
        github: "https://github.com/Mathieu94110/Go-to-the-moon-project",
        logos: goToTheMoonAndTravelAgencyImgs
    },
    {
        title: "candyShop",
        img: IMAGES.candyShop,
        type: "Projet Vue2/VueX",
        description: "Projet de boutique en ligne de bonbons",
        link: "https://candy-shop-theta.vercel.app",
        github: "https://github.com/Mathieu94110/country-app-v2",
        logos: candyShopImg
    },

    {
        img: IMAGES.eco,
        title: "Eco",
        type: "Spa en Vue3/VueX/Typescript/Node/MongoDb",
        description: "Projet fullstack autour des jeux vidéos, incluant un système de création et connection, de recherche de jeux, un carrousel, système de favoris etc...",
        link: "https://eco-peach.vercel.app",
        github: "https://github.com/Mathieu94110/Eco",
        logos: EcoProjectImgs
    },

    {
        title: "CryptoApp",
        type: "Spa en React18/Redux/Typescript",
        description: "Projet dédié au suivi et à l'évolution des crypto-monnaies recourant aux services de l'api coin-gecko",
        img: IMAGES.cryptoApp,
        github: "https://github.com/Mathieu94110/CryptoApp",
        link: "https://crypto-app-omega-ashen.vercel.app/",
        logos: CryptoProjectImgs
    },
    {
        img: IMAGES.cocktailsApp,

        title: "CocktailsApp",
        type: "Spa en React18/Typescript/Node/MongoDb",
        description: "Projet fullstack avec tests d'intération et e2e, fonctionnant grâce à l'api Context de React et le système de hook (useReducer), offrant notamment un système de recherche multi-filtre",
        link: "http://vps-26aea99b.vps.ovh.net",
        github: "https://github.com/Mathieu94110/CocktailsApp",
        logos: fullStackReactExpressProjectsImgs
    },
    {
        img: IMAGES.reactAmazonClone,
        title: "Amazon clone",
        type: "Spa en React18/Typescript/Node/MongoDb",
        description: "Projet fullstack React/Typescript/ExpressJs/MongoDb sur le model d'Amazon, fonctionnant grâce à l'api Context de React et offrant des fonctionnalités avancées",
        link: "https://react-amazon-clone-xi.vercel.app/",
        github: "https://github.com/Mathieu94110/ReactAmazonClone",
        logos: fullStackReactExpressProjectsImgs
    },
    {
        img: IMAGES.youtubeClone,

        title: "Youtube clone",
        type: "Spa en React18/Typescript",
        description: "Projet de clone de youtube en React/Typescript",
        link: "https://youtube-clone-sandy-nu.vercel.app/",
        github: "https://github.com/Mathieu94110/YoutubeClone",
        logos: CryptoProjectImgs
    },
    {
        title: "Mon application Spotify",
        type: "Spa en React18/Redux",
        description: "Clone de l'application Spotify recourant aux services de l'api de spotify, offrant diverses fonctionnalités ( historique des écoutes, recherche/création de playlists etc ...) ",
        img: IMAGES.spotifyApp,
        link: "",
        github: "https://github.com/Mathieu94110/My_spotify-app",
        logos: SpotifyProjectImgs
    },
    {
        img: IMAGES.airBnbClone,
        title: "Airbnb Clone",
        type: "Projet NextJs",
        description: "Clone de l'application AirBnb, en NextJs/TailwindCss fonctionnant en SSR (server side rendering) permettant de rechercher des logements avec un système de recherche avancée",
        link: "https://air-bnb-clone-swart.vercel.app/",
        github: "https://github.com/Mathieu94110/AirBnbClone",
        logos: NextsJsCloneProjectsImgs
    },
    {
        img: IMAGES.twitterClone,
        title: "Twitter Clone",
        type: "Projet NextJS",
        description: "Clone de l'application Twitter, en NextJs/Typescript/TailwindCss permettant de s'authentifier avec NextAuth et Twitter et de tweeter",
        link: "",
        github: "https://github.com/Mathieu94110/AirBnbClone",
        logos: NextsJsCloneProjectsImgs
    },
    {
        img: IMAGES.movieApp,
        title: "MovieApp",
        type: "Projet NextJS",
        description: "Projet movie application, en NextJs/Typescript permettant de rechercher un film et d'en afficher les détails avec un système de traduction, de suggestion, et de recherche par filtre",
        link: "https://vps-5dce9500.vps.ovh.net",
        github: "https://github.com/Mathieu94110/MovieApp",
        logos: NextsJsMovieAppImgs
    },
    {
        img: IMAGES.ticTacToe,
        title: "TicTacToe",
        type: "Projet React Native",
        description: "Projet permettant de bien comprendre le fonctionnement global de React Native (syntaxe, styles, gestionnaires d'évènements etc...)",
        link: "",
        github: "https://github.com/Mathieu94110/TIc-Tac-Toe",
        logos: reactNativeTypescriptImgs
    },
    {
        img: IMAGES.uberEatsClone,
        title: "Uber Eats Clone",
        type: "Projet React Native/Firebase/Redux/Typescript",
        description: "Clone de l'application Uber Eats, permet de rechercher un restaurant, d'obtenir des informations relatives à cet établissement et de passer des commandes",
        link: "",
        github: "https://github.com/Mathieu94110/uber-eats-app",
        logos: reactNativeTypescriptAndReduxImgs
    },
    {
        img: IMAGES.tinderApp,
        title: "Tinder clone",
        type: "Projet React Native/Firebase/Typescript",
        description: "Avec système d'authentification de Google par mail et mot de passe, permet de consulter les profils disponibles, de matcher avec eux, et si le match est réciproque d'échanger avec la personne sur un tchat",
        link: "",
        github: "https://github.com/Mathieu94110/tinderApp",
        logos: reactNativeTypescriptAndFirebase
    },
    {
        img: IMAGES.amazonApp,
        title: "Amazon clone",
        type: "Projet React Native/GoogleAuthentication/Typescript",
        description: "Avec l'authentification par gmail de Google, offre un système de navigation avec bottom tap bar et de communication des composants avec context provider et reducers",
        link: "",
        github: "https://github.com/Mathieu94110/AmazonClone",
        logos: reactNativeTypescriptAndFirebase
    }
];





