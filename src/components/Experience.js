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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="text-xl capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="text-xl font-medium w-full md:text-sm">{work}</p>
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
      <h2 className="font-bold text-6xl mb-32 w-full text-center 2xl:!text-4xl  lg:!text=3xl md:!text-3xl sm:!text-2xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Développeur front-end VueJs"
            company="Marvin recruiter"
            companyLink="https://www.marvinrecruiter.com/"
            time="Fevrier à Aout 2022"
            address="42 Rue du Faubourg Poissonnière, 75010 Paris"
            work="Mon rôle : Mettre en place de nouvelles
            fonctionnalités dans l'ATS Marvin et corriger les bugs remontés
            par les utilisateurs.
            Mes tâches: Création de nouvelles features ,
            débugging, refactorisation du code, mise en production sur gitlab,
            revues de code etc ... 
            Stack: Vue2, vuex, node-js, mongo-db, sass, docker,
            gitlab"
          />
          <Details
            position="Développeur front-end AngularJs"
            company="Incepto médical"
            companyLink="https://incepto-medical.com/"
            time="Mai à Octobre 2021"
            address="Tour montparnasse, 75014 Paris"
            work="Mon rôle: Créer des fonctionnalités sur l'outil
            gateway afin de faciliter le travail de récupération et de gestion
            des données de l'équipe de déploiement.
            Mes tâches : Création de nouvelles features ,
            débugging, refactorisation du code, travail sur github, revues de
            code, échange avec l'équipe déploiement concernant leurs attentes
            etc ...
            Stack: Angular7, typescript, rxjs, sass, docker,
            github"
          />

          <Details
            position="Consultant SEO"
            company="Yapuka"
            companyLink="https://yapuka.org/"
            time="Septembre 2019 à Février 2020"
            address="35 rue du Sentier, 75002 PARIS"
            work="Mon rôle: Optimiser le référencement du site yapuka.org afin d'augmenter la visibilité de l'entreprise et d'augmenter son taux de conversion.
            Mes tâches : Remonter à l'équipe de développement les optimisations a effectuer dans le code source (balisage, contenu textuel, améliorer le chargement des pages ...)  ,
            mise en place de tests A/B, recherche du contenu textuel a utiliser pour ressortir sur les moteurs de recherche, stratégie de net linking, campagne google ads.
            Stack: Google analytics, Google tag manager, Seo observer"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
