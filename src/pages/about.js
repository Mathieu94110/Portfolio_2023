import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout"
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
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Découvrez en plus sur moi"
            className="mb-16 !leading-tight 2xl:!text-4xl  lg:!text=3xl md:!text-3xl sm:!text-2xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-6">
            <div className="col-span-3 place-items: center; flex flex-col h-full  items-start justify-start xl:col-span-4 xl:col-start-2 xl:col-end-6 xl:order-2 md:col-span-8">
              <h2 className="mb-12 text-lg font-bold uppercase text-light">
                Biographie
              </h2>
              <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm  md:font-medium text-light mb-8">
                Je m'apelle Mathieu Enault, j'ai 36 ans et je suis passionné par le développement web.
              </p>
              <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm  md:font-medium text-light mb-8">
                J'ai tout d'abord acquis les bases solides du développement front-end lors de ma formation à la Coding-Academy d'Épitech.</p>  <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm  md:font-medium text-light mb-8">Depuis, j'ai enrichi mon parcours à travers diverses expériences professionnelles, où j'ai pu approfondir mes connaissances, notamment en Angular et Vue.js. Mon objectif est de toujours repousser les limites de mon expertise technique, tout en contribuant à des projets innovants.
              </p>

              <p className="my-4 3xl:!text-2xl 2xl:!text-xl sm:!text-sm md:font-medium text-light mb-8">
                J'ai travaillé dans plusieurs entreprises, en tant que développeur Angular et une en Vue.js.</p>
              <p className="my-4 3xl:!text-2xl 2xl:!text-xl sm:!text-sm md:font-medium text-light mb-8">
                Ces expériences m'ont permis de renforcer mes compétences, d'optimiser la performance des applications et de collaborer étroitement avec les équipes backend pour des solutions complètes. Lors de ma dernière expérience au sein d'une ESN reconnue, j'ai perfectionné ma maîtrise d'Angular et appliqué les meilleures pratiques dans des projets complexes.
              </p>

              <p className="3xl:!text-2xl 2xl:!text-xl sm:!text-sm md:font-medium text-light/75">
                Aujourd'hui, je continue à me perfectionner en tant que développeur front-end et dans des domaines transverses comme les tests, l'algorithmique et le développement backend.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 xl:col-span-4 xl:col-start-2 xl:col-end-6 xl:order-1 md:col-span-8 sm:p-2"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
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
          <Experience />
          <Education />
          <Stack />
        </Layout>
      </main>
    </>
  );
};

export default about;
