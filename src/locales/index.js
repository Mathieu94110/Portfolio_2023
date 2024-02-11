import Image from "next/image";
import Link from "next/link";
import IMAGES from "../../public/images";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const HelloWorldImgs = [IMAGES.logoHtmlCss, IMAGES.logoJavascript];
const goToTheMoonAndTravelAgencyImgs = [
  IMAGES.logoHtmlCss,
  IMAGES.logoJavascript,
  IMAGES.logoSass,
];

const CryptoProjectImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.logoSass,
];
const SpotifyProjectImgs = [
  IMAGES.logoReact,
  IMAGES.spotifyLogo,
  IMAGES.logoSass,
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
];
const candyShopImg = [
  IMAGES.logoVue,
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
];
const countryAppImg = [IMAGES.logoVue];
const EcoProjectImgs = [
  IMAGES.logoVue,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.logoSass,
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
];
const fullStackReactExpressProjectsImgs = [
  IMAGES.logoReact,
  IMAGES.logoTypescript,
  IMAGES.logoNodeJs,
  IMAGES.logoMongoDb,
  IMAGES.testingLibraryLogo,
  IMAGES.jestLogo,
  IMAGES.cypressLogo,
];

const NextsJsCloneProjectsImgs = [
  IMAGES.logoNextJs,
  IMAGES.logoTypescript,
  IMAGES.logoTailwindCss,
];
const NextsJsMovieAppImgs = [
  IMAGES.logoNextJs,
  IMAGES.logoTypescript,
  IMAGES.logoSass,
];
const reactNativeTypescriptImgs = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
];
const reactNativeTypescriptAndReduxImgs = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
  IMAGES.reduxLogo,
  IMAGES.logoTailwindCss,
];
const reactNativeTypescriptAndFirebase = [
  IMAGES.reactNativeLogo,
  IMAGES.logoTypescript,
  IMAGES.firebase,
];

const Project = ({
  title,
  img,
  type,
  description,
  link,
  github,
  skills,
  index,
}) => {
  return (
    <article>
      <div className="project-card group relative h-[190px] w-[320px] xs:w-[232px] bg-[#333] duration-500 hover:h-[540px] ">
        <div className="overflow-hidden absolute inset-0 bg-black  before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:h-[120px] before:w-[600px] before:bg-gradient-to-r before:from-transparent before:via-[#45f3ff]  before:to-transparent before:animate-spin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]"></div>
        <div className="absolute top-[-50px] group-hover:top-[-100px] left-1/2 w-[150px] h-[150px] bg-black  duration-500 overflow-hidden z-10 translate-x-[-50%] group-hover:w-[200px]  group-hover:h-[200px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:w-[350px] before:h-[100px] before:bg-gradient-to-r before:from-transparent  before:via-[#ff3c7b] before:to-transparent before:animate-reverseSpin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929]">
          <FramerImage
            src={img}
            alt={title}
            className="absolute top-2.5 left-2.5 z-[1] w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] "
          />
        </div>
        <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
          <div className="project-content py-[40px] px-[20px] xs:pb-[30px] xs:px-[10px] absolute top-[-82px] text-center w-full duration-500 translate-y-[145px] group-hover:translate-y-[0px] group-hover:static">
            <h2 className="text-xl xs:text-lg font-semibold text-[#45f3ff] mb-7">
              {title}
              <br></br>
              <span className="text-sm font-medium text-white xs:text-xs  xs:break-all">
                {type}
              </span>
            </h2>
            <div className="flex justify-between my-5 mx-0">
              <div>
                <ul
                  role="list"
                  className="w-full pb-2  flex flex-col items-start"
                >
                  <h3 className="text-sm font-semibold text-[#45f3ff]">
                    Stack
                  </h3>
                  <span className="h-10 flex justify-center items-center">
                    <span className="flex flex-row mt-2">
                      {skills?.map((skill, index) => (
                        <li
                          className="w-8 h-8 px-1 items-center justify-center"
                          key={index}
                        >
                          <Image src={skill} alt={skill} />
                        </li>
                      ))}
                    </span>
                  </span>
                </ul>
                <div className="flex flex-col justify-between  mb-5">
                  <h3 className="text-sm font-semibold text-[#45f3ff] text-left">
                    Description
                  </h3>

                  <span className="text-sm xs:text-xs text-white font-base text-left pr-2  xs:break-all">
                    {description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5">
              <Link
                href={github}
                target="_blank"
                className="py-1 px-[15px] xs:px-[4px] xs:text-sm opacity-80 border-none outline-none rounded-md text-base font-medium bg-white text-[#222] cursor-pointer hover:opacity-100"
              >
                Github
              </Link>
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="py-1 px-[15px] xs:px-[4px] xs:text-sm opacity-80 border-none outline-none rounded-md text-base font-medium  bg-[#45f3ff] text-[#222] cursor-pointer hover:opacity-100"
                >
                  Démonstration
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export {
  HelloWorldImgs,
  countryAppImg,
  candyShopImg,
  goToTheMoonAndTravelAgencyImgs,
  CryptoProjectImgs,
  SpotifyProjectImgs,
  EcoProjectImgs,
  fullStackReactExpressProjectsImgs,
  NextsJsCloneProjectsImgs,
  NextsJsMovieAppImgs,
  reactNativeTypescriptImgs,
  reactNativeTypescriptAndReduxImgs,
  reactNativeTypescriptAndFirebase,
  Project,
};
