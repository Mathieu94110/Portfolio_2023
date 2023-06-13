import AnimatedText from '@/components/AnimatedText';
import { GithubIcon, EyeIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMAGES from '../../public/images';
import { motion } from 'framer-motion';

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

const Project = ({ title, img, link, github, skills }) => {
  return (
    <article className="w-4/6  mx-auto h-auto border border-solid  border-black rounded-2xl">
      <div className="w-full h-full relative self-center justify-self-center">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto mx-auto rounded-t-2xl"
        />
        <div className="h-5/6 scale-100 scale-100 w-full absolute left-0 top-0 rounded-t-2xl rounded-b-none flex flex-col justify-center items-center  scale-0 transition-all ease-in-out duration-300">
          <div className="group  h-full w-full transition-all ease-in-out duration-400 flex justify-center items-center hover:bg-black/[.5] hover:rounded-t-2xl">
            <Link
              href={github}
              target="_blank"
              className="group invisible group-hover:visible bg-[#191d2b] rounded-full w-12 h-12 flex items-center justify-center mx-4 cursor-pointer hover:bg-white hover:text-black no-underline"
            >
              <GithubIcon className="group-hover:rounded-full group-hover:bg-black group-hover:text-white text-2xl  mx-3 " />
            </Link>
            {link && (
              <Link
                href={link}
                target="_blank"
                className="group invisible group-hover:visible bg-[#191d2b] rounded-full w-12 h-12 flex items-center justify-center mx-4 cursor-pointer hover:bg-white hover:text-black no-underline"
              >
                <EyeIcon className="bg-white rounded-full  text-2xl  mx-3 " />
              </Link>
            )}
          </div>
        </div>
        <ul
          role="list"
          className="w-full bg-white rounded-b-2xl rounded-bl-2xl py-2 px-5 h-1/6 flex items-center"
        >
          {skills?.map((skill, index) => (
            <li
              className="w-9 h-9 mx-2 flex items-center justify-center"
              key={index}
            >
              <Image src={skill} alt={skill} />
            </li>
          ))}
        </ul>
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
            className="grid grid-cols-4 gap-12 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
          >
            <motion.div variants={images} class="group relative">
              <Project
                title="Template responsive go to the moon"
                img={IMAGES.helloWorld}
                link="https://mathieu94110.github.io/Hello-world-project/"
                github="https://github.com/Mathieu94110/Hello-world-project"
                skills={HelloWorldImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="Template responsive go to the moon"
                img={IMAGES.goToTheMoon}
                link="https://mathieu94110.github.io/Go-to-the-moon-project/"
                github="https://github.com/Mathieu94110/Go-to-the-moon-project"
                skills={goToTheMoonAndTravelAgencyImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="Template responsive travel agency"
                img={IMAGES.travelAgency}
                link="https://mathieu94110.github.io/Travel-agency-project/"
                github="https://github.com/Mathieu94110/Travel-agency-project"
                skills={goToTheMoonAndTravelAgencyImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                title="CryptoApp"
                img={IMAGES.cryptoApp}
                github="https://github.com/Mathieu94110/CryptoApp"
                link="https://crypto-app-omega-ashen.vercel.app/"
                skills={CryptoProjectImgs}
              />
            </motion.div>

            <motion.div variants={images} class="group relative">
              <Project
                title="Mon application Spotify"
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
                link=""
                github="https://github.com/Mathieu94110/Eco"
                skills={EcoProjectImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.cocktailsApp}
                title="CocktailsApp"
                link="http://vps-26aea99b.vps.ovh.net"
                github="https://github.com/Mathieu94110/CocktailsApp"
                skills={cocktailsProjectImgs}
              />
            </motion.div>

            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.airBnbClone}
                title="Airbnb Clone"
                link="https://air-bnb-clone-black.vercel.app/"
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.twitterClone}
                title="Twitter Clone"
                link=""
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.ticTacToe}
                title="TicTacToe"
                link=""
                github="https://github.com/Mathieu94110/TIc-Tac-Toe"
                skills={reactNativeTypescriptImgs}
              />
            </motion.div>
            <motion.div variants={images} class="group relative">
              <Project
                img={IMAGES.uberEatsClone}
                title="Uber Eats Clone"
                link=""
                github="https://github.com/Mathieu94110/uber-eats-app"
                skills={reactNativeTypescriptAndReduxImgs}
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
