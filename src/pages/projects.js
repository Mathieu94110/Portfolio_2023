import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoToTheMoonImg from "../../public/images/projects_images/go-to-the-moon.png";
import TravelAgencyImg from "../../public/images/projects_images/travel-agency.png";
import CrypoAppImg from "../../public/images/projects_images/crypto-app.png";
import SpotifyAppImg from "../../public/images/projects_images/spotify.jpg";
import EcoAppImg from "../../public/images/projects_images/eco.png";
import CoctailsAppImg from "../../public/images/projects_images/cocktails-app.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  return (
    <article>
      <div className="w-auto flex flex-col h-[420px] relative self-center justify-self-center mx-auto rounded-lg border border-black lg:h-[460px]">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-3/5 mx-auto rounded-t-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <div className="flex flex-col flex-auto items-start justify-between m-3 ">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {title}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-xl font-bold lg:text-2xl sm:text-base">
              {type}
            </h2>
          </Link>

          <div className="w-full flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Démonstration
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
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
            className="mb-16 3xl:!text-6xl 2xl:!text-4xl sm:mb-8 sm:!text-lg"
          />

          <div className="grid grid-cols-4 gap-12 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1">
            <div>
              <Project
                type="Projet d'intégration responsive"
                title="Template responsive go to the moon"
                img={GoToTheMoonImg}
                link="https://mathieu94110.github.io/Go-to-the-moon-project/"
                github="https://github.com/Mathieu94110/Go-to-the-moon-project"
              />
            </div>
            <div>
              <Project
                type="Projet d'intégration responsive"
                title="Template responsive travel agency"
                img={TravelAgencyImg}
                link="https://mathieu94110.github.io/Travel-agency-project/"
                github="https://github.com/Mathieu94110/Travel-agency-project"
              />
            </div>
            <div>
              <Project
                type="Projet ReactJs côté client"
                title="CryptoApp"
                img={CrypoAppImg}
                github="https://github.com/Mathieu94110/Crypto_tracking"
                link="https://mathieu94110.github.io/Crypto_tracking/"
              />
            </div>

            <div>
              <Project
                type="Projet ReactJs côté client"
                title="Mon application Spotify"
                img={SpotifyAppImg}
                link=""
                github="https://github.com/Mathieu94110/My_spotify-app"
              />
            </div>

            <div>
              <Project
                type="Application full-stack avec Vue3/Typescript NodeJs"
                img={EcoAppImg}
                title="Eco"
                github="https://github.com/Mathieu94110/Eco"
                link=""
              />
            </div>
            <div>
              <Project
                type="Application full-stack avec React18/Typescript NodeJs"
                img={CoctailsAppImg}
                title="CocktailsApp"
                link="http://vps-26aea99b.vps.ovh.net"
                github="https://github.com/Mathieu94110/CocktailsApp"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
