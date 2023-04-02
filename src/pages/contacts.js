import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import ContactForm from "@/components/Form/ContactForm";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Formulaire de contact" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text="Formulaire de contact"
            className="mb-16 3xl:!text-6xl 2xl:!text-4xl sm:mb-8 sm:!text-lg"
          />

          <div className="flex justify-center">
            <ContactForm />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contacts;
