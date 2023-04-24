import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Stack from "@/components/Stack";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/portrait.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>A propos de moi</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Découvrez en plus sur moi"
            className="mb-16 !leading-tight 2xl:!text-4xl  lg:!text=3xl md:!text-3xl sm:!text-2xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-6">
            <div className="col-span-3 place-items: center; flex flex-col h-full justify-center items-start justify-start xl:col-span-4 xl:col-start-2 xl:col-end-6 xl:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biographie
              </h2>
              <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm  md:font-medium">
                Je m'apelle Mathieu Enault, j'ai 34 ans, j'ai éffectué de
                Février à Juin 2019 une formation à la coding-academy d'Épitech
                , qui m'a permis d'acquérir les bases du développement
                front-end.
              </p>

              <p className="my-4 3xl:!text-2xl 2xl:!text-xl sm:!text-sm md:font-medium">
                J'ai travaillé par la suite dans 2 entreprises , dans la
                première en tant que développeur front-end Angular 7, dans la
                deuxième en tant que développeur front-end Vue2
              </p>

              <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm md:font-medium">
                Depuis je me perfectionne dans des domaines transverse comme les
                tests, la partie backend avec NodeJs et MongoDb ou la découverte
                de frameworks React comme NextJs.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 xl:col-start-2 xl:col-end-6 xl:order-1 md:col-span-8 sm:p-2
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Mathieu Enault"
                width={400}
                height={600}
                className="m-auto w-1/3 "
                priority
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
          <Stack />
        </Layout>
      </main>
    </>
  );
};

export default about;
