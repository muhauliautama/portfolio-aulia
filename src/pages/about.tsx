import { Link } from "react-router-dom";
import { BiSolidFileBlank, BiSend } from "react-icons/bi";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
} from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaGitSquare,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiCodeigniter,
  SiJquery,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const about = ({ dark }: { dark: any }) => {
  const stack = [
    {
      icon: <FaHtml5 size={50} />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt size={50} />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <IoLogoJavascript size={50} />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <SiTypescript size={50} />,
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: <SiCodeigniter size={50} />,
      link: "https://www.codeigniter.com/",
    },
    {
      icon: <FaLaravel size={50} />,
      link: "https://laravel.com/",
    },
    {
      icon: <SiJquery size={50} />,
      link: "https://jquery.com/",
    },
    {
      icon: <FaReact size={50} />,
      link: "https://react.dev/",
    },
    {
      icon: <SiNextdotjs size={50} />,
      link: "https://nextjs.org/",
    },
    {
      icon: <SiRedux size={50} />,
      link: "https://redux.js.org/",
    },
    {
      icon: <SiTailwindcss size={50} />,
      link: "https://tailwindcss.com/",
    },
    {
      icon: <FaBootstrap size={50} />,
      link: "https://getbootstrap.com/",
    },
    {
      icon: <FaGitSquare size={50} />,
      link: "https://www.git-scm.com/",
    },
    {
      icon: <FaFigma size={50} />,
      link: "https://www.figma.com/",
    },
  ];
  const office = [
    {
      name: "PT. AZLogistik Dot Com",
      year: "2022 - Now",
      role: "Front End Web Developer",
      icon: <TbCircleNumber1Filled className="xs:hidden" size={20} />,
      status: "Fulltime",
    },
    {
      name: "CV. Nusantara Jagung Malang",
      year: "2022",
      role: "Front End Web Developer",
      icon: <TbCircleNumber2Filled className="xs:hidden" size={20} />,
      status: "Lecturer Project",
    },
    {
      name: "Brawijaya University (Faculty Economy and Business)",
      year: "2022",
      role: "Front End Web Developer",
      icon: <TbCircleNumber3Filled className="xs:hidden" size={20} />,
      status: "Freelance",
    },
    {
      name: "Perum Bulog Malang",
      year: "2022",
      role: "Fullstack Web Developer",
      icon: <TbCircleNumber4Filled className="xs:hidden" size={20} />,
      status: "Internship",
    },
    {
      name: "PT. Geomedia Sinergi Malang",
      year: "2019",
      role: "Backend Developer",
      icon: <TbCircleNumber5Filled className="xs:hidden" size={20} />,
      status: "Internship",
    },
  ];
  const darkMode = dark;

  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !darkMode
          ? "bg-grayBg border-grayBorder"
          : "bg-lightBg2 border-lightBorder"
      }`}
    >
      <section className="items-center px-5">
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
            More About Me
          </span>
        </div>
        <span
          className={`${
            !darkMode ? "text-grayText" : "text-lightBorder"
          } text-justify text-base sm:text-sm leading-8`}
        >
          A Front End Web Developer with experience and expertise in creating
          attractive and responsive user interfaces. Do you need a website that
          is not only functional but also visually stunning? I am ready to help
          you achieve those goals. I invite you to explore the diverse range of
          projects I have undertaken, highlighting my skills, creativity, and
          attention to detail.
        </span>
      </section>
      <section
        className={` ${
          !darkMode
            ? "bg-grayBg border-grayBorder"
            : "bg-lightBg2 border-lightBorder"
        } flex justify-between rounded-xl shadow-xl border p-5 flex-col gap-5 sm:gap-4`}
      >
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
            Journey Experience
          </span>
        </div>
        {office.map((key) => {
          return (
            <div
              key={key.name}
              className={`flex justify-between ${
                !darkMode
                  ? "bg-[#373737] border-grayBorder"
                  : "bg-lightBg2 border-lightBorder"
              } rounded-xl shadow-xl border  p-5 flex-col gap-5 xs:gap-4`}
            >
              <div className="flex justify-between text-white xs:flex-col">
                <div className="flex gap-2 items-center">
                  {key.icon}
                  <span className="font-bold text-base sm:text-sm">
                    {key.name}
                  </span>
                </div>
                <span className="font-normal text-base sm:text-sm">
                  {key.year}
                </span>
              </div>
              <div className="flex gap-3 xs:flex-col">
                <span
                  className={`text-grayText text-sm font-semibold ${
                    !darkMode ? "bg-[#424242]" : "bg-gray-100"
                  } rounded-xl py-1 px-3 w-fit`}
                >
                  {key.role}
                </span>
                <span
                  className={`text-grayText text-sm font-semibold ${
                    !darkMode ? "bg-[#424242]" : "bg-gray-100"
                  } rounded-xl py-1 px-3 w-fit`}
                >
                  {key.status}
                </span>
              </div>
            </div>
          );
        })}
      </section>
      <section
        className={`flex justify-between ${
          !darkMode
            ? "bg-grayBg border-grayBorder"
            : "bg-lightBg2 border-lightBorder"
        } rounded-xl shadow-xl border p-5 flex-col gap-5 sm:gap-4`}
      >
        <div className="w-full flex flex-wrap gap-5 items-center justify-center">
          {stack.map((key) => {
            return (
              <Link
                key={key.link}
                to={key.link}
                className={`border ${
                  !darkMode
                    ? "bg-[#2C2C2C] border border-gray-700"
                    : "bg-lightBg2 border-white"
                } rounded-full p-3 shadow-2xl w-fit h-fit ease-in-out text-white`}
              >
                {key.icon}
              </Link>
            );
          })}
        </div>
      </section>
      <section
        className={`${
          !darkMode
            ? "lg:bg-grayBorder lg:border-grayBorder"
            : "lg:bg-lightBg2 lg:border-lightBorder"
        } flex justify-center items-center  lg:rounded-xl lg:shadow-xl lg:border  p-5 flex-col gap-5 sm:gap-4`}
      >
        <span
          className={`${
            !darkMode ? "text-white" : "text-lightText"
          }  text-3xl font-bold`}
        >
          Let's Work Together.
        </span>
        <span className="text-grayText ext-base sm:text-sm">
          Creating your own or business website with me.
        </span>
        <div className="flex gap-3 mt-2">
          <button
            className={`${
              !darkMode ? "bg-[#2E2E2E]" : "bg-lightText"
            } border-none xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border`}
            onClick={() => window.open("mailto:oyojwork@gmail.com")}
          >
            <BiSend
              className={`${!darkMode ? "text-[#8f8f8f]" : "text-white"}`}
            />
            Hire me
          </button>
          <button
            className={`bg-transparent ${
              !darkMode ? "border-grayBorder" : "border-lightBorder"
            } border xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border`}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Zzl5JJBTmtMHhEteBrJMqJdBgLer9ZUQ/view?usp=drive_link"
              )
            }
          >
            <BiSolidFileBlank
              className={`${!darkMode ? "text-[#8f8f8f]" : "text-white"}`}
            />
            My CV
          </button>
        </div>
      </section>
    </main>
  );
};

export default about;
