import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group text-light`}>
      {title}

      <span
        className={`
          h-[1px] inline-block 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      <span className={` text-dark`}>{title}</span>

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
     relative z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className=" flex-col justify-center items-center -white hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            } `}
        ></span>
        <span
          className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center text-2xl lg:hidden ">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Accueil" className="mr-4" />
          <CustomLink href="/about" title="A propos de moi" className="mx-4" />
          <CustomLink href="/projects" title="Projets" className="mx-4" />
          <CustomLink href="/contacts" title="Contacts" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/Mathieu94110"
            target={"_blank"}
            className="w-12 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className={`text-light`} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mathieu-enault-2a571084
            "
            target={"_blank"}
            className="w-12 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-light rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Accueil"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="A propos de moi"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Mes projets"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contacts"
              title="Contacts"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/Mathieu94110"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full  sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mathieu-enault-2a571084"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
