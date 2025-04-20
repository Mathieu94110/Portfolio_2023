import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-light text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-light/75 md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center 2xl:!text-4xl lg:!text=3xl md:!text-3xl sm:!text-2xl md:mb-16 text-white">
        Formation
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-light origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Certification développeur front-end"
            time="2020"
            place="Kremlin-Bicêtre 94270"
            info="Formation DEV & GO : 16 semaines en formation
            intensive dans les locaux d'ÉPITECH . Piscine PHP (4 semaines),
            Intégration web avec html5,css3(sass,less),Javascript (6
            semaines). Projets autour des frameworks Angular et React.js.(4
            semaines) Ui/Ux , gestion de projets (méthode agile),
            Référencement , accessibilité(1 semaine) Création d'un portfolio
            et déploiement sur Github (1 semaine)."
          />

          <Details
            type="Bts Banque option a: marché des particuliers"
            time="2011-2013"
            place="CFPB Place clichy 75017"
            info="Bts Banque en contrat d'apprentissage sur un rythme 1 semaine en entreprise 1 semaine en école"
          />

          <Details
            type="Baccalauréat ES option mathématiques"
            time="2009"
            place="Lycée Saint-gabriel Bagneux 92220"
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
