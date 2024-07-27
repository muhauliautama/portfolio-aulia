import ImgPerson from "@/assets/kadal.png";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoGmail,
  BiLogoTwitter,
  BiSolidFileBlank,
  BiSend,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const sosmedLink = [
  {
    id: 1,
    icon: <BiLogoTwitter className="text-white" size={26} />,
    link: "https://x.com/ajyoor",
  },
  {
    id: 2,
    icon: <BiLogoInstagramAlt className="text-white" size={26} />,
    link: "https://www.instagram.com/ajyoor/",
  },
  {
    id: 3,
    icon: <BiLogoGithub className="text-white" size={26} />,
    link: "https://github.com/ajyoor",
  },
  {
    id: 4,
    icon: <BiLogoLinkedin className="text-white" size={26} />,
    link: "https://www.linkedin.com/in/airlangga-joyonegoro-97037024a/",
  },
  {
    id: 5,
    icon: <BiLogoGmail className="text-white" size={26} />,
    link: "mailto:oyojwork@gmail.com",
  },
];
const home = ({ dark }: { dark: any }) => {
  const yearCount = new Date().getFullYear();
  const darkMode = dark;

  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !darkMode
          ? "bg-grayBg border-grayBorder"
          : "bg-lightBg2 border-lightBorder"
      }`}
    >
      <section className="flex justify-between items-center px-5">
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
            Front End Web Developer
          </span>
        </div>
        <div
          className={`rounded-full ${
            !darkMode ? "bg-[#263A2F]" : "bg-lightBg"
          } w-fit h-fit p-2 flex items-center gap-1`}
        >
          <div className="rounded-full bg-green-500 w-2 h-2"></div>
          <span className="uppercase text-[#049753] text-xs px-2 sm:hidden">
            Available For Work
          </span>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center text-start my-12 md:hidden gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-white text-4xl font-bold my-3 sm:text-2xl">
              I'm Airlangga
            </span>
            <span
              className={`${
                !darkMode ? "text-grayText" : "text-lightText"
              } text-md sm:text-sm`}
            >
              Front End Web Developer from Malang, Indonesia.
            </span>
            <span
              className={`${
                !darkMode ? "text-grayText" : "text-lightText"
              } text-md sm:text-sm`}
            >
              Currently still learning about Typescript :)
            </span>
            <div className="flex gap-3 mt-6">
              <button
                className={`${
                  !darkMode
                    ? "bg-transparent border-grayBorder"
                    : "bg-lightText border-white"
                } border xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border`}
                onClick={() => window.open("mailto:oyojwork@gmail.com")}
              >
                <BiSend
                  className={`${!darkMode ? "text-[#8f8f8f]" : "text-white"}`}
                />
                Hire me
              </button>
              <button
                className={`${
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
          </div>
          <div
            className={`border  w-[160px] h-[160px] overflow-hidden rounded-full p-3 ${
              !darkMode
                ? "bg-[#2C2C2C] border-grayBorder"
                : "bg-lightBgborder-lightBorder"
            }`}
          >
            <img src={ImgPerson} alt="img" defaultValue={ImgPerson} />
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-2 justify-center items-center text-center my-12">
          <div
            className={`border  w-[160px] h-[160px] overflow-hidden rounded-full p-3 ${
              !darkMode
                ? "bg-[#2C2C2C] border-grayBorder"
                : "bg-lightBg border-lightBorder"
            }`}
          >
            <img src={ImgPerson} alt="img" defaultValue={ImgPerson} />
          </div>
          <span className="text-white text-4xl font-bold my-3 sm:text-2xl">
            I'm Airlangga
          </span>
          <span
            className={`${
              !darkMode ? "text-grayText" : "text-lightBorder"
            } text-md sm:text-sm`}
          >
            Front End Web Developer from Malang, Indonesia.
          </span>
          <span
            className={`${
              !darkMode ? "text-grayText" : "text-lightBorder"
            } text-md sm:text-sm`}
          >
            Currently still learning about Typescript :)
          </span>
          <div className="flex gap-3 mt-6">
            <button
              className={`${
                !darkMode
                  ? "bg-transparent border-grayBorder"
                  : "bg-lightText border-white"
              } border xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border`}
              onClick={() => window.open("mailto:oyojwork@gmail.com")}
            >
              <BiSend
                className={`${!darkMode ? "text-[#8f8f8f]" : "text-white"}`}
              />
              Hire me
            </button>
            <button
              className={`${
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
        </div>
      </section>
      <section
        className={`${
          !darkMode
            ? "bg-grayBorder border-grayBorder"
            : "bg-lightBg2 border-lightBorder"
        } flex justify-between rounded-xl shadow-xl border p-5 sm:flex-col sm:gap-4`}
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
            } text-xl sm:text-base font-bold`}
          >
            Follow Me
          </span>
        </div>
        <div className="flex gap-3 items-center sm:justify-center sm:items-center sm:gap-6 xs:gap-4">
          {sosmedLink.map((key) => {
            return (
              <Link
                key={key.link}
                className={`border ${
                  !darkMode
                    ? "bg-[#2C2C2C] border border-gray-700"
                    : "bg-lightBg2 shadow-2xl border-white"
                } text-white rounded-full p-2 hover:bg-grayBg`}
                to={key.link}
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
            ? "bg-grayBorder border-grayBorder"
            : "bg-lightBg2 border-lightBorder"
        } flex justify-center rounded-xl shadow-xl border p-5`}
      >
        <span
          className={` ${
            !darkMode ? "text-grayTextContent" : "text-white"
          } text-xs font-thin`}
        >
          @{yearCount} Last Updated - Airlangga Joyonegoro
        </span>
      </section>
    </main>
  );
};

export default home;
