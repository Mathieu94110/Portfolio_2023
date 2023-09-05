import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
];
const EcoProjectImgs = [
  IMAGES.logoVue,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
  IMAGES.cypressLogo,
];
const cocktailsProjectImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
  IMAGES.cypressLogo,
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

const Project = ({
  title,
  img,
  type,
  description,
  link,
  github,
  skills,
  index,
}) => {
  return (
    <article>
      <div className="project-card group relative h-[190px] w-[320px] bg-[#333] duration-500 hover:h-[540px] ">
        <div className="overflow-hidden absolute inset-0 bg-black  before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:h-[120px] before:w-[600px] before:bg-gradient-to-r before:from-transparent before:via-[#45f3ff]  before:to-transparent before:animate-spin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]"></div>
        <div className="absolute top-[-50px] group-hover:top-[-100px] left-1/2 w-[150px] h-[150px] bg-black  duration-500 overflow-hidden z-10 translate-x-[-50%] group-hover:w-[200px]  group-hover:h-[200px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:w-[350px] before:h-[100px] before:bg-gradient-to-r before:from-transparent  before:via-[#ff3c7b] before:to-transparent before:animate-reverseSpin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]">
          <FramerImage
            src={img}
            alt={title}
            className="absolute top-2.5 left-2.5 z-[1] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] "
          />
        </div>
        <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
          <div className="project-content py-[40px] px-[20px] absolute top-[-82px] text-center w-full duration-500 translate-y-[145px] group-hover:translate-y-[0px] group-hover:static">
            <h2 className="text-xl font-semibold text-[#45f3ff] mb-7">
              {title}
              <br></br>
              <span className="text-sm font-medium text-white">{type}</span>
            </h2>
            <div className="flex justify-between my-5 mx-0">
              <div>
                <ul
                  role="list"
                  className="w-full pb-2  flex flex-col items-start"
                >
                  <h3 className="text-sm font-semibold text-[#45f3ff]">
                    Stack
                  </h3>
                  <span className="h-10 flex justify-center items-center">
                    <span className="flex flex-row mt-2">
                      {skills?.map((skill, index) => (
                        <li
                          className="w-8 h-8 px-1 items-center justify-center"
                          key={index}
                        >
                          <Image src={skill} alt={skill} />
                        </li>
                      ))}
                    </span>
                  </span>
                </ul>
                <div className="flex flex-col justify-between  mb-5">
                  <h3 className="text-sm font-semibold text-[#45f3ff] text-left">
                    Description
                  </h3>

                  <span className="text-sm text-white font-base text-left pr-2">
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
    margin: "auto",
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
            className="mb-32 3xl:!text-6xl 2xl:mb-18 2xl:!text-4xl sm:!text-lg"
          />

          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-4 gap-y-28 gap-x-12 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
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
                index={0}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                title="Template responsive go to the moon"
                type="Projet d'intégration"
                description="Projet d'intégration responsive en Html5 et Css3"
                img={IMAGES.goToTheMoon}
                link="https://mathieu94110.github.io/Go-to-the-moon-project/"
                github="https://github.com/Mathieu94110/Go-to-the-moon-project"
                skills={goToTheMoonAndTravelAgencyImgs}
                index={1}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                title="Template responsive travel agency"
                type="Projet d'intégration"
                description="Projet d'intégration responsive en Html5 et Scss"
                img={IMAGES.travelAgency}
                link="https://mathieu94110.github.io/Travel-agency-project/"
                github="https://github.com/Mathieu94110/Travel-agency-project"
                skills={goToTheMoonAndTravelAgencyImgs}
                index={2}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.eco}
                title="Eco"
                type="Spa en Vue/VueX/Typescript/Node/MongoDb"
                description="Projet fullstack avec tests d'intération et e2e, permettant de se créer et de se connecter à un compte utilisateur, de modifier les informations du profil, de rechercher des articles par catégories, système de favoris etc..."
                link=""
                github="https://github.com/Mathieu94110/Eco"
                skills={EcoProjectImgs}
                index={5}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                title="Mon application de cryptomonnaies"
                type="Spa en React/Redux/Typescript"
                description="Projet dédié au suivi et à l'évolution des crypto-monnaies recourant aux services de l'api coin-gecko"
                img={IMAGES.cryptoApp}
                github="https://github.com/Mathieu94110/CryptoApp"
                link="https://crypto-app-omega-ashen.vercel.app/"
                skills={CryptoProjectImgs}
                index={3}
              />
            </motion.div>

            <motion.div variants={images} className="group relative">
              <Project
                title="Mon application Spotify"
                type="Spa en React/Redux"
                description="Clone de l'application Spotify recourant aux services de l'api de spotify, offrant diverses fonctionnalités ( historique des écoutes, recherche/création de playlists etc ...) "
                img={IMAGES.spotifyApp}
                link="https://my-spotify-app-theta.vercel.app/"
                github="https://github.com/Mathieu94110/My_spotify-app"
                skills={SpotifyProjectImgs}
                index={4}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.cocktailsApp}
                title="CocktailsApp"
                type="Spa en React/Typescript/Node/MongoDb"
                description="Projet fullstack avec tests d'intération et e2e, fonctionnant grâce à l'api Context de React et le système de hook (useReducer), offrant notamment un système de recherche multi-filtre"
                link="http://vps-26aea99b.vps.ovh.net"
                github="https://github.com/Mathieu94110/CocktailsApp"
                skills={cocktailsProjectImgs}
                index={6}
              />
            </motion.div>

            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.airBnbClone}
                title="Airbnb Clone"
                type="Projet NextJs"
                description="Clone de l'application AirBnb, en NextJs/TailwindCss fonctionnant en SSR (server side rendering) permettant de rechercher des logements avec un système de recherche avancée"
                link="https://air-bnb-clone-black.vercel.app/"
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
                index={7}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.twitterClone}
                title="Twitter Clone"
                type="Projet NextJS"
                description="Clone de l'application Twitter, en NextJs/Typescript/TailwindCss permettant de s'authentifier avec NextAuth et Twitter et de tweeter"
                link=""
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
                index={8}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.ticTacToe}
                title="TicTacToe"
                type="Projet React Native"
                description="Projet permettant de bien comprendre le fonctionnement global de React Native (syntaxe, styles, gestionnaires d'évènements etc...)"
                link=""
                github="https://github.com/Mathieu94110/TIc-Tac-Toe"
                skills={reactNativeTypescriptImgs}
                index={9}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.uberEatsClone}
                title="Uber Eats Clone"
                type="Projet React Native/Firebase/Redux/Typescript"
                description="Clone de l'application Uber Eats, permet de rechercher un restaurant, d'obtenir des informations relatives à cet établissement et de passer des commandes"
                link=""
                github="https://github.com/Mathieu94110/uber-eats-app"
                skills={reactNativeTypescriptAndReduxImgs}
                index={10}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.tinderApp}
                title="Tinder clone"
                type="Projet React Native/Firebase/Typescript"
                description="Avec système d'authentification de Google par mail et mot de passe, permet de consulter les profils disponibles, de matcher avec eux, et si le match est réciproque d'échanger avec la personne sur un tchat"
                link=""
                github="https://github.com/Mathieu94110/tinderApp"
                skills={reactNativeTypescriptAndFirebase}
                index={11}
              />
            </motion.div>
            <motion.div variants={images} className="group relative">
              <Project
                img={IMAGES.amazonApp}
                title="Amazon clone"
                type="Projet React Native/GoogleAuthentication/Typescript"
                description="Avec l'authentification par gmail de Google, offre un système de navigation avec bottom tap bar et de communication des composants avec context provider et reducers"
                link=""
                github="https://github.com/Mathieu94110/AmazonClone"
                skills={reactNativeTypescriptAndFirebase}
                index={11}
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
