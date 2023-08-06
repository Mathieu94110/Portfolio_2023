import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMAGES from "../../public/images";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const HelloWorldImgs = [IMAGES.logoHtmlCss, IMAGES.logoJavascript];
const goToTheMoonAndTravelAgencyImgs = [
  IMAGES.logoHtmlCss,
  IMAGES.logoJavascript,
  IMAGES.logoSass,
];

const CryptoProjectImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.logoSass,
];
const SpotifyProjectImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.spotifyLogo,
  IMAGES.logoSass,
];
const EcoProjectImgs = [
  IMAGES.logoVue,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
];
const cocktailsProjectImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
];

const NextsJsCloneProjectsImgs = [
  IMAGES.logoNextJs,
  IMAGES.logoTypescript,
  IMAGES.logoTailwindCss,
];
const reactNativeTypescriptImgs = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
];
const reactNativeTypescriptAndReduxImgs = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
  IMAGES.reduxLogo,
  IMAGES.logoTailwindCss,
];
const reactNativeTypescriptAndFirebase = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
  IMAGES.firebase,
];
const Project = ({ title, img, type, description, link, github, skills }) => {
  return (
    <article>
      <div className="group relative h-[190px] w-[350px] bg-[#333] duration-500 hover:h-[600px] ">
        <div className="overflow-hidden absolute inset-0 bg-black before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:h-[120px] before:w-[600px] before:bg-gradient-to-r before:from-transparent before:via-[#45f3ff] before:via-[#45f3ff] before:via-[#45f3ff] before:to-transparent before:animate-spin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]"></div>
        <div className="absolute top-[-50px] left-1/2 w-[150px] h-[150px] bg-black  duration-500 overflow-hidden z-10 translate-x-[-50%] group-hover:w-[200px]  group-hover:h-[200px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:w-[350px] before:h-[100px] before:bg-gradient-to-r before:from-transparent before:via-[#ff3c7b] before:via-[#ff3c7b] before:via-[#ff3c7b] before:to-transparent before:animate-reverseSpin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]">
          <FramerImage
            src={img}
            alt={title}
            className="absolute top-2.5 left-2.5 z-[1] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)]"
          />
        </div>
        <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
          <div className="p-[40px] text-center w-full duration-500 translate-y-[145px] group-hover:translate-y-[0px]">
            <h2 className="text-xl font-semibold text-[#45f3ff] mb-8">
              {title}
              <br></br>
              <span className="text-sm font-medium text-white">{type}</span>
            </h2>
            <div className="flex justify-between my-5">
              <div>
                <ul
                  role="list"
                  className="w-full py-2  h-1/6 flex items-center"
                >
                  <span className="text-sm font-semibold text-[#45f3ff]">
                    Stack
                  </span>
                  {skills?.map((skill, index) => (
                    <li
                      className="w-9 h-9 mx-2 flex items-center justify-center"
                      key={index}
                    >
                      <Image src={skill} alt={skill} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-between my-5">
                  <span className="text-sm font-semibold text-[#45f3ff] text-left">
                    Description
                  </span>

                  <span className="text-sm text-white font-base text-left">
                    {description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5">
              <Link
                href={github}
                target="_blank"
                className="py-1 px-[15px] opacity-80 border-none outline-none rounded-md text-base font-medium bg-white text-[#222] cursor-pointer hover:opacity-100"
              >
                Github
              </Link>
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="py-1 px-[15px] opacity-80 border-none outline-none rounded-md text-base font-medium bg-[#45f3ff] text-[#222] cursor-pointer hover:opacity-100"
                >
                  Démonstration
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mes projets</title>
        <meta
          name="description"
          content="Page mes projets ou sont présentés certains de mes projets"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text="Découvrez certains de mes projets!"
            className="mb-16 3xl:!text-6xl 2xl:mb-12 2xl:!text-4xl sm:mb-8 sm:!text-lg"
          />

          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-4 gap-y-24 gap-x-12 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
          >
            <motion.div variants={images}>
              <Project
                title="Template responsive go to the moon"
                img={IMAGES.helloWorld}
                type="Projet d'intégration"
                description="Projet d'intégration responsive en Html5 et Css3"
                link="https://mathieu94110.github.io/Hello-world-project/"
                github="https://github.com/Mathieu94110/Hello-world-project"
                skills={HelloWorldImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="Template responsive go to the moon"
                type="Projet d'intégration"
                description="Projet d'intégration responsive en Html5 et Css3"
                img={IMAGES.goToTheMoon}
                link="https://mathieu94110.github.io/Go-to-the-moon-project/"
                github="https://github.com/Mathieu94110/Go-to-the-moon-project"
                skills={goToTheMoonAndTravelAgencyImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="Template responsive travel agency"
                type="Projet d'intégration"
                description="Projet d'intégration responsive en Html5 et Scss"
                img={IMAGES.travelAgency}
                link="https://mathieu94110.github.io/Travel-agency-project/"
                github="https://github.com/Mathieu94110/Travel-agency-project"
                skills={goToTheMoonAndTravelAgencyImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="CryptoApp"
                type="Spa en React/Redux/Typescript"
                description="Projet dédié au suivi et à l'évolution des crypto-monnaies recourant aux services de l'api coin-gecko"
                img={IMAGES.cryptoApp}
                github="https://github.com/Mathieu94110/CryptoApp"
                link="https://crypto-app-omega-ashen.vercel.app/"
                skills={CryptoProjectImgs}
              />
            </motion.div>

            <motion.div variants={images} class="group relative">
              <Project
                title="Mon application Spotify"
                type="Spa en React/Redux/Typescript"
                description="Clone de l'application Spotify recourant aux services de l'api de spotify, offrant diverses fonctionnalités (consultation de l'historique des écoutes, recherche de titre, création de playlists etc ...) "
                img={IMAGES.spotifyApp}
                link=""
                github="https://github.com/Mathieu94110/My_spotify-app"
                skills={SpotifyProjectImgs}
              />
            </motion.div>

            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.eco}
                title="Eco"
                type="Spa en Vue/VueX/Typescript/NodeJs/MongoDb"
                description="Projet fullstack avec tests d'intération et e2e, permettant de se créer et de se connecter à un compte utilisateur, de modifier les informations du profil, de rechercher des articles par catégories, système de favoris etc..."
                link=""
                github="https://github.com/Mathieu94110/Eco"
                skills={EcoProjectImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.cocktailsApp}
                title="CocktailsApp"
                type="Spa en React/Typescript/NodeJs/MongoDb"
                description="Projet fullstack avec tests d'intération et e2e, fonctionnant grâce à l'api Context de React et le système de hook (useReducer), offrant notamment un système de recherche multi-filtre"
                link="http://vps-26aea99b.vps.ovh.net"
                github="https://github.com/Mathieu94110/CocktailsApp"
                skills={cocktailsProjectImgs}
              />
            </motion.div>

            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.airBnbClone}
                title="Airbnb Clone"
                type="Projet NextJs"
                description="Clone de l'application AirBnb, en NextJs/TailwindCss fonctionnant en SSR (server side rendering) permettant de rechercher des logements avec un système de recherche avancée"
                link="https://air-bnb-clone-black.vercel.app/"
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.twitterClone}
                title="Twitter Clone"
                type="Projet NextJS"
                description="Clone de l'application Twitter, en NextJs/Typescript/TailwindCss permettant de s'authentifier avec NextAuth et Twitter et de créer des tweets"
                link=""
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.ticTacToe}
                title="TicTacToe"
                type="Projet React Native"
                description="Projet permettant de bien comprendre le fonctionnement global de React Native (syntaxe, styles, gestionnaires d'évènements etc...)"
                link=""
                github="https://github.com/Mathieu94110/TIc-Tac-Toe"
                skills={reactNativeTypescriptImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.uberEatsClone}
                title="Uber Eats Clone"
                type="Projet React Native/Firebase/Redux/Typescript"
                description="Clone de l'application"
                link=""
                github="https://github.com/Mathieu94110/uber-eats-app"
                skills={reactNativeTypescriptAndReduxImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.tinderApp}
                title="Uber Eats Clone"
                type="Projet React Native/Firebase/Typescript"
                description="Projet avec système d'authentification de Google, permettant de consulter les profils disponibles, de matcher avec eux, et si le match est réciproque d'échanger avec cette personne sur un tchat"
                link=""
                github="https://github.com/Mathieu94110/tinderApp"
                skills={reactNativeTypescriptAndFirebase}
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
