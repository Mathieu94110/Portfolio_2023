import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, EyeIcon } from "@/components/Icons";
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
import AirBnbCloneImg from "../../public/images/projects_images/airbnb-clone.png";
import TwitterCloneImg from "../../public/images/projects_images/twitter-elon-musk.jpg";
import HtmlCssImg from "../../public/images/skills_images/html-css.png";
import JavascriptImg from "../../public/images/skills_images/javascript.png";
import SassImg from "../../public/images/skills_images/sass.png";
import MongoDbtImg from "../../public/images/skills_images/mongo-db.png";
import NodeJsImg from "../../public/images/skills_images/nodejs.jpg";
import ReactImg from "../../public/images/skills_images/react.jpg";
import SpotifyLogoImg from "../../public/images/skills_images/spotify-logo.png";
import TypescriptImg from "../../public/images/skills_images/typescript.png";
import VueImg from "../../public/images/skills_images/vue.png";
import NextImg from "../../public/images/skills_images/next.png";
import TailwindCssImg from "../../public/images/skills_images/tailwindcss.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const IntegrationProjectsImgs = [HtmlCssImg, JavascriptImg, SassImg];
const CryptoProjectImgs = [ReactImg, TypescriptImg, SassImg];
const SpotifyProjectImgs = [ReactImg, SpotifyLogoImg, TypescriptImg, SassImg];
const EcoProjectImgs = [VueImg, NodeJsImg, MongoDbtImg, TypescriptImg, SassImg];
const cocktailsProjectImgs = [
  ReactImg,
  NodeJsImg,
  MongoDbtImg,
  TypescriptImg,
  SassImg,
];
const NextsJsCloneProjectsImgs = [NextImg, TypescriptImg, TailwindCssImg];

const Project = ({ title, type, img, link, github, skills }) => {
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
            <li className="w-9 h-9 mx-2 flex items-center justify-center">
              <Image src={skill} alt={skill} key={index} />
            </li>
          ))}
        </ul>
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
                title="Template responsive go to the moon"
                img={GoToTheMoonImg}
                link="https://mathieu94110.github.io/Go-to-the-moon-project/"
                github="https://github.com/Mathieu94110/Go-to-the-moon-project"
                skills={IntegrationProjectsImgs}
              />
            </div>
            <div>
              <Project
                title="Template responsive travel agency"
                img={TravelAgencyImg}
                link="https://mathieu94110.github.io/Travel-agency-project/"
                github="https://github.com/Mathieu94110/Travel-agency-project"
                skills={IntegrationProjectsImgs}
              />
            </div>
            <div>
              <Project
                title="CryptoApp"
                img={CrypoAppImg}
                github="https://github.com/Mathieu94110/Crypto_tracking"
                link="https://mathieu94110.github.io/Crypto_tracking/"
                skills={CryptoProjectImgs}
              />
            </div>

            <div>
              <Project
                title="Mon application Spotify"
                img={SpotifyAppImg}
                link=""
                github="https://github.com/Mathieu94110/My_spotify-app"
                skills={SpotifyProjectImgs}
              />
            </div>

            <div>
              <Project
                img={EcoAppImg}
                title="Eco"
                link=""
                github="https://github.com/Mathieu94110/Eco"
                skills={EcoProjectImgs}
              />
            </div>
            <div>
              <Project
                img={CoctailsAppImg}
                title="CocktailsApp"
                link="http://vps-26aea99b.vps.ovh.net"
                github="https://github.com/Mathieu94110/CocktailsApp"
                skills={cocktailsProjectImgs}
              />
            </div>

            <div>
              <Project
                img={AirBnbCloneImg}
                title="Airbnb Clone"
                link="https://air-bnb-clone-black.vercel.app/"
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </div>
            <div>
              <Project
                img={TwitterCloneImg}
                title="Twitter Clone"
                link=""
                github="https://github.com/Mathieu94110/AirBnbClone"
                skills={NextsJsCloneProjectsImgs}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
