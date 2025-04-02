import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="text-xl capitalize font-medium text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="text-xl font-medium w-full md:text-sm text-light/75">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 lg:my-32 sm:my-16">
      <h2 className="font-bold text-6xl mb-32 text-white w-full text-center 2xl:!text-4xl  lg:!text=3xl md:!text-3xl sm:!text-2xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-light origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px]
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Développeur front-end Angular"
            company="EY Fabernovel"
            companyLink="https://www.ey.com/fr_fr/services/ey-fabernovel"
            time="Septembre 2024 à Avril 2025"
            address="46 rue Saint-Lazare, 75009 Paris"
            work="Mon rôle : Développer de nouvelles fonctionnalités scalables pour une application web d'un grand constructeur automobile.
    Mes tâches : Création de nouvelles features, débogage, refactorisation du code, revues de code, participation aux raffinements, sprint pokers.
    Stack : Angular 18, Angular Material, Jest, Sass, Docker, GitLab"
          />
          <Details
            position="Développeur front-end VueJs"
            company="Marvin Recruiter"
            companyLink="https://www.marvinrecruiter.com/"
            time="Février à Août 2022"
            address="42 Rue du Faubourg Poissonnière, 75010 Paris"
            work="Mon rôle : Mettre en place de nouvelles fonctionnalités dans l'ATS Marvin et corriger les bugs remontés par les utilisateurs.
    Mes tâches : Création de nouvelles features, débogage, refactorisation du code, mise en production sur GitLab, revues de code, etc.
    Stack : Vue2, Vuex, Node.js, MongoDB, Sass, Docker, GitLab"
          />
          <Details
            position="Développeur front-end Angular"
            company="Incepto Médical"
            companyLink="https://incepto-medical.com/"
            time="Mai à Octobre 2021"
            address="Tour Montparnasse, 75014 Paris"
            work="Mon rôle : Créer des fonctionnalités sur l'outil Gateway afin de faciliter le travail de récupération et de gestion des données de l'équipe de déploiement.
    Mes tâches : Création de nouvelles features, débogage, refactorisation du code, travail sur GitHub, revues de code, échange avec l'équipe déploiement concernant leurs attentes, etc.
    Stack : Angular 7, TypeScript, RxJS, Sass, Docker, GitHub"
          />
          <Details
            position="Consultant SEO"
            company="Yapuka"
            companyLink="https://yapuka.org/"
            time="Septembre 2019 à Février 2020"
            address="35 rue du Sentier, 75002 Paris"
            work="Mon rôle : Optimiser le référencement du site yapuka.org afin d'augmenter la visibilité de l'entreprise et d'améliorer son taux de conversion.
    Mes tâches : Remonter à l'équipe de développement les optimisations à effectuer dans le code source (balisage, contenu textuel, améliorer le chargement des pages, etc.), mise en place de tests A/B, recherche du contenu textuel à utiliser pour ressortir sur les moteurs de recherche, stratégie de netlinking, campagnes Google Ads.
    Stack : Google Analytics, Google Tag Manager, SEO Observer"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
