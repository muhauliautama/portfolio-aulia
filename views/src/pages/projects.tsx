import { AnimatedContent, SpotlightCard } from "@/components/Content";
import { FaThreads } from "react-icons/fa6";
import {
  IoGameController,
  IoNewspaperOutline,
  IoLogoJavascript,
} from "react-icons/io5";
import { FaReact, FaImdb, FaSpotify, FaQuran } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbJson } from "react-icons/tb";
import Game from "@/assets/game.png";
import Twitter from "@/assets/twitter.png";
import Quran from "@/assets/quarn.png";
import News from "@/assets/news.png";
import { Iklan } from "./about";

const ImageContainer = ({
  src,
  alt,
  darkMode,
}: {
  src: string;
  alt: string;
  darkMode: boolean;
}) => (
  <div
    className={`flex flex-col gap-1 !rounded-xl p-3 relative overflow-hidden ${
      darkMode && "cursor-pointer"
    }`}
  >
    <img
      src={src}
      className="w-[500px] sm:w-[300px] h-[250px] sm:h-[180px] object-contain mx-auto"
      alt={alt}
    />
  </div>
);

const cardItems = [
  {
    icon: <FaQuran size={32} color="#c0c0c0" />,
    title: "Quran PRO Cloned",
    description: [
      <SiTypescript size={20} color="#c0c0c0" />,
      <SiNextdotjs size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <SiRedux size={20} color="#c0c0c0" />,
      <TbJson size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
  {
    icon: <FaThreads size={32} color="#c0c0c0" />,
    title: "Threads Cloned",
    description: [
      <SiTypescript size={20} color="#c0c0c0" />,
      <SiNextdotjs size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <SiRedux size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
  {
    icon: <FaSpotify size={32} color="#c0c0c0" />,
    title: "Spotify Cloned",
    description: [
      <IoLogoJavascript size={20} color="#c0c0c0" />,
      <SiNextdotjs size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <SiRedux size={20} color="#c0c0c0" />,
      <TbJson size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
  {
    icon: <FaImdb size={32} color="#c0c0c0" />,
    title: "IMDB Cloned",
    description: [
      <IoLogoJavascript size={20} color="#c0c0c0" />,
      <SiNextdotjs size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <SiRedux size={20} color="#c0c0c0" />,
      <TbJson size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
  {
    icon: <IoGameController size={32} color="#c0c0c0" />,
    title: "Game Voucher",
    description: [
      <IoLogoJavascript size={20} color="#c0c0c0" />,
      <SiNextdotjs size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <SiRedux size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
  {
    icon: <IoNewspaperOutline size={32} color="#c0c0c0" />,
    title: "News Portal",
    description: [
      <IoLogoJavascript size={20} color="#c0c0c0" />,
      <FaReact size={20} color="#c0c0c0" />,
      <SiTailwindcss size={20} color="#c0c0c0" />,
      <TbJson size={20} color="#c0c0c0" />,
    ],
    link: "#",
  },
];

const projects = ({ dark }: { dark: any }) => {
  const darkMode = dark;

  const items = [
    { content: <ImageContainer src={Game} alt="Game" darkMode={darkMode} /> },
    {
      content: (
        <ImageContainer src={Twitter} alt="Twitter" darkMode={darkMode} />
      ),
    },
    { content: <ImageContainer src={News} alt="News" darkMode={darkMode} /> },
    { content: <ImageContainer src={Quran} alt="Quran" darkMode={darkMode} /> },
  ];

  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto  rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !darkMode ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-white"
      } relative overflow-hidden`}
    >
      {/* description content */}
      <section className="items-center px-2">
        <div className="flex gap-4 items-center">
          <div
            className={`rounded-full ${
              !darkMode ? "bg-[#626262]" : "bg-red-400"
            } w-2 h-2`}
          ></div>
          <span
            className={`${
              !darkMode ? "text-grayTextContent" : "text-lightText"
            } text-xl sm:text-lg xs:text-sm font-bold`}
          >
            Showcase
          </span>
        </div>
        <span
          className={`${
            !darkMode ? "text-grayText" : "text-white"
          } text-justify text-base sm:text-sm leading-8 sm:!leading-6 pt-2 block`}
        >
          Here are some of my works that I can show in general (because I am
          also bound by work that I certainly cannot publish), mostly include
          recreate some famous websites that you can see and clone through my
          GitHub site.
        </span>
      </section>

      {/* showcase content */}
      <section
        className={` ${
          !darkMode ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-white"
        } flex justify-between rounded-xl shadow-xl border p-5 flex-col gap-5 sm:gap-4`}
      >
        <div
          className={`h-[250px] sm:h-[180px] relative overflow-hidden border rounded-xl ${
            !darkMode ? "border-grayBorder" : "border-lightBorder bg-lightBg"
          }`}
        >
          <div className="absolute w-full animate-scroll group-hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="w-full h-[250px] sm:h-[180px]">
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {cardItems.map((key, idx) => {
              return (
                <SpotlightCard
                  key={idx}
                  className={`flex flex-col gap-1 sm:w-full !rounded-xl ${
                    darkMode && "!bg-lightBg !border-lightBorder"
                  }`}
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="flex items-center gap-4">
                    {key.icon}
                    <span
                      className={`${
                        !darkMode ? "text-grayTextContent" : "text-lightText"
                      } text-xl sm:text-lg xs:text-sm font-semibold`}
                    >
                      {key.title}
                    </span>
                  </div>
                  <p
                    className={`${
                      !darkMode ? "text-grayText" : "text-lightBorder"
                    } italic text-justify text-sm leading-8 sm:!leading-6 pt-2 block`}
                  >
                    made with :{" "}
                    <div className="flex gap-3 sm:pt-1">
                      {key.description.map((ky) => ky)}
                    </div>
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </AnimatedContent>
      </section>

      {/* iklan content */}
      <Iklan darkMode={darkMode} />
    </main>
  );
};

export default projects;
