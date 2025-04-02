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
      <main className="flex items-center w-full text-light sm:items-start bg-[#333]">
        <Layout className=" md:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col h-[calc(100vh_-_180px)] sm:h-auto">
            <div className="w-1/3">
              <Image
                src={profilePic}
                alt="Mathieu Enault"
                width={200}
                className="m-auto 2xl:w-[300px] 3xl:w-[300px]"
                priority
              />
            </div>
            <div className="w-2/3 mx-8 flex flex-col items-center self-center lg:w-full lg:text-center sm:pr-0">
              <AnimatedText
                text="Développeur front-end Angular/ReactJs"
                className="!text-6xl !text-left 
                2xl:!text-4xl lg:!text-center lg:!text=3xl md:!text-3xl sm:!text-2xl
                "
              />
              <p className="my-4 text-base font-medium 3xl:text-xl md:text-sm sm:text-xs">
                Je suis un développeur web qui recherche constamment à améliorer
                ses compétences en créant de nouvelles applications et en
                effectuant de la veille technologique principalement autour de
                Angular, React et Typescript.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                {/* have to fixe issue on cv downloading ! <Link
                  href="/cv-mathieu-enault.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                   md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Cv <LinkArrow className={"w-6 ml-1"} />
                </Link> 
                */}
                <Link
                  href="mailto:enault.mathieu2@gmail.com"
                  target={"_blank"}
                  className="flex items-center text-dark p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  bg-light md:p-2 md:px-4 md:text-base
                  "
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
