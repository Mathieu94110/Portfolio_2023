import Image from "next/image";
import React from "react";
import IMAGES from "../../public/images";

const stackImgs = [
  IMAGES.logoHtmlCss,
  IMAGES.logoJavascript,
  IMAGES.logoReact,
  IMAGES.reactNativeLogo,
  IMAGES.logoNextJs,
  IMAGES.logoVue,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
  IMAGES.logoTailwindCss,
];

const Stack = () => {
  return (
    <footer
      className="w-full  border-solid border-dark
    font-medium text-lg sm:text-base
    "
    >
      <h2 className="font-bold text-6xl mb-32 w-full text-center 2xl:!text-4xl lg:!text=3xl  sm:!text-3xl md:mb-16 text-white">
        Outils
      </h2>
      <div className=" mb-32 h-64 flex items-center justify-between lg:flex-col lg:py-6">
        <ul
          role="list"
          className="w-full bg-transparent rounded-b-2xl rounded-bl-2xl py-2 px-8 sm:px-3 h-1/6 flex flex-wrap items-center justify-evenly xl:justify-start xl:ml-12 xs:ml-8"
        >
          {stackImgs?.map((stack, index) => (
            <li
              className="w-24 h-24 mx-2 flex sm:w-12 sm:h-12 xs:w-10 xs:h-10  2xl:w-20 2xl:h-20   items-center"
              key={index}
            >
              <Image src={stack} alt={stack} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Stack;
