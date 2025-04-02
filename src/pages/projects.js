import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Project,
} from "../locales";
import { projectImgs } from "@/constants/projects";
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
      <main className="w-full flex flex-col items-center justify-center text-light">
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
            {projectImgs.map((project, index) => (
              <motion.div variants={images} className="group relative">
                <Project
                  img={project.img}
                  title={project.title}
                  type={project.type}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  logos={project.logos}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
