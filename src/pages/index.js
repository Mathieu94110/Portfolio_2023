import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/portrait.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio 2023 de Mathieu Enault</title>
        <meta
          name="description"
          content="Ayant décider de m'orienté dans le développement web il y a 4
          ans, je recherche constamment à améliorer mes compétences en
          créant de nouvelles applications et en renforçant mes
          compétences à tout ce qui a attrait à l'environement de React et
          de Vue qui sont mes librairies de prédilection."
        />
      </Head>
      <main className="flex items-center text-dark w-full dark:text-light sm:items-start">
        <Layout className=" md:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col h-[calc(100vh_-_180px)] sm:h-auto">
            <div className="w-1/3 md:w-full">
              <Image
                src={profilePic}
                alt="Mathieu Enault"
                width={400}
                height={600}
                className="m-auto  sm:h-[300px] sm:w-auto"
                priority
              />
            </div>
            <div className="w-2/3 mx-8 flex flex-col items-center self-center lg:w-full lg:text-center sm:pr-0">
              <AnimatedText
                text="Développeur front-end ReactJs/VueJs en recherche d'emploi"
                className="!text-6xl !text-left 
                2xl:!text-4xl lg:!text-center lg:!text=3xl md:!text-3xl sm:!text-2xl
                "
              />
              <p className="my-4 text-base font-medium 3xl:text-xl md:text-sm sm:text-xs">
                Ayant décider de m'orienté dans le développement web il y a 4
                ans, je recherche constamment à améliorer mes compétences en
                créant de nouvelles applications et en renforçant mes
                compétences à tout ce qui a attrait à l'environement de React et
                de Vue qui sont mes librairies de prédilection.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Cv-Enault-Mathieu.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Cv <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:me94110@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden"></div>
      </main>
    </>
  );
}
