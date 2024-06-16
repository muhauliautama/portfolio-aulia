import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import sassIcon from "@/assets/sass.png";
import jsIcon from "@/assets/js.png";
import tsIcon from "@/assets/ts.png";
import ciIcon from "@/assets/codeigniter.svg";
import laravelIcon from "@/assets/laravel.png";
import jqueryIcon from "@/assets/jquery.svg";
import reactIcon from "@/assets/react.png";
import nextIcon from "@/assets/nextjs.svg";
import reduxIcon from "@/assets/redux.svg";
import tailwindIcon from "@/assets/tailwind.png";
import bstIcon from "@/assets/bootstrap.svg";
import gitIcon from "@/assets/git.png";
import bunIcon from "@/assets/bun.png";
import figmaIcon from "@/assets/figma.png";
import { FaCode } from "react-icons/fa6";

const skills = () => {
  const stack = [
    {
      icon: htmlIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: cssIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: sassIcon,
      link: "https://sass-lang.com/",
    },
    {
      icon: jsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: tsIcon,
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: ciIcon,
      link: "https://www.codeigniter.com/",
    },
    {
      icon: laravelIcon,
      link: "https://laravel.com/",
    },
    {
      icon: jqueryIcon,
      link: "https://jquery.com/",
    },
    {
      icon: reactIcon,
      link: "https://react.dev/",
    },
    {
      icon: nextIcon,
      link: "https://nextjs.org/",
    },
    {
      icon: reduxIcon,
      link: "https://redux.js.org/",
    },
    {
      icon: tailwindIcon,
      link: "https://tailwindcss.com/",
    },
    {
      icon: bstIcon,
      link: "https://getbootstrap.com/",
    },
    {
      icon: gitIcon,
      link: "https://www.git-scm.com/",
    },
    {
      icon: bunIcon,
      link: "https://bun.sh/",
    },
    {
      icon: figmaIcon,
      link: "https://www.figma.com/",
    },
  ];
  const cardList = [
    {
      icon: <FaCode color="#FFC700" size={42} />,
      title: "Web Development",
      detail:
        "Seorang Front End Web Developer dengan pengalaman dan keahlian dalam menciptakan antarmuka pengguna yang menarik dan responsif. Apakah Anda membutuhkan website yang tidak hanya fungsional tetapi juga memukau secara visual? Saya siap membantu Anda mencapai tujuan tersebut.",
    },
  ];

  return (
    <motion.div
      className="skills flex flex-col h-screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <span className="text-[70px] font-bold ml-[50px] mt-10 ff-3 sm:ml-0 sm:text-center sm:text-[40px] sm:mx-auto sm:my-4 sm:underline sm:underline-offset-[15px] sm:w-full">
        My Skills
      </span>
      {/* ornamen kanan */}
      <div className="w-[300px] h-[70px] rounded-full bg-white fixed right-[-80px] top-[40px] sm:hidden"></div>
      {/* ornamen kiri */}
      <div className="w-[400px] h-[400px] rounded-full bg-[#191917] fixed left-[-250px] top-[200px] sm:hidden"></div>
      <div className="w-[100px] h-[100px] rounded-full bg-[#f7c002] fixed left-[-50px] top-[180px] sm:hidden"></div>
      <div className="flex justify-center gap-10 sm:flex-col sm:overflow-y-auto sm:gap-5 sm:p-5">
        <div className="flex flex-col gap-8 my-auto">
          <div className="grid grid-cols-[repeat(1,auto)] gap-10 m-0 w-[500px] sm:w-auto">
            {cardList.map((key) => {
              return (
                <div className="bg-[#131312] rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-xl border-white border gap-2">
                  {key.icon}
                  <span className="font-bold text-lg">{key.title}</span>
                  <span className="text-justify">{key.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1 h-full rounded-xl bg-[#f7c002] sm:w-72 sm:m-auto sm:h-1 sm:mt-3"></div>
        <div className="flex flex-col gap-8">
          <span className="text-[48px] font-bold mt-10 text-center mt-0 sm:hidden">
            Software Skills
          </span>
          <div className="grid grid-cols-[repeat(4,auto)] gap-10 m-0 w-fit sm:p-5 sm:gap-5 sm:justify-center sm:w-full">
            {stack.map((key) => {
              return (
                <Link
                  to={key.link}
                  className="flex flex-row flex-wrap items-center gap-5 w-[100px] h-fit justify-center hover:ease-in"
                >
                  <img
                    className="rounded-full p-1 bg-white border-none w-[80px] h-[80px] ease-in-out"
                    src={key.icon}
                    alt="image-skills"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default skills;
