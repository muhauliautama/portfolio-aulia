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
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nihil minima fugiat eos, cumque quae illum doloribus quos iure animi error, excepturi perferendis. Ipsam architecto officia natus praesentium, cupiditate tempora itaque beatae temporibus velit exercitationem quam quod suscipit sapiente odio delectus aliquid iste eveniet, culpa, eius blanditiis aut. Non, eius?",
    },
    {
      icon: <FaCode color="#FFC700" size={42} />,
      title: "Web Development",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nihil minima fugiat eos, cumque quae illum doloribus quos iure animi error, excepturi perferendis. Ipsam architecto officia natus praesentium, cupiditate tempora itaque beatae temporibus velit exercitationem quam quod suscipit sapiente odio delectus aliquid iste eveniet, culpa, eius blanditiis aut. Non, eius?",
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
      <span className="text-[52px] font-bold ml-[50px] mt-10">My Skills</span>
      {/* ornamen kanan */}
      <div className="w-[300px] h-[70px] rounded-full bg-white fixed right-[-80px] top-[40px]"></div>
      {/* ornamen kiri */}
      <div className="w-[400px] h-[400px] rounded-full bg-[#191917] fixed left-[-250px] top-[200px]"></div>
      <div className="w-[100px] h-[100px] rounded-full bg-[#f7c002] fixed left-[-50px] top-[180px]"></div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-8 my-auto">
          <div className="grid grid-cols-[repeat(1,auto)] gap-10 m-0 w-[500px]">
            {cardList.map((key) => {
              return (
                <div className="bg-[#131312] rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-xl border-white border">
                  {key.icon}
                  <span>{key.title}</span>
                  <span>{key.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1 h-full rounded-xl bg-[#f7c002]"></div>
        <div className="flex flex-col gap-8">
          <span className="text-[48px] font-bold mt-10 text-center mt-0">
            Software Skills
          </span>
          <div className="grid grid-cols-[repeat(4,auto)] gap-10 m-0 w-fit">
            {stack.map((key) => {
              return (
                <Link
                  to={key.link}
                  className="flex flex-row flex-wrap items-center gap-5 w-[100px] h-fit justify-center"
                >
                  <img
                    className="rounded-full p-1 bg-white border-none w-[80px] h-[80px]"
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
