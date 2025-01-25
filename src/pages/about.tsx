import { Link } from "react-router-dom";
import { BiSolidFileBlank, BiSend } from "react-icons/bi";
import Button from "@/components/Button";
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
import { AnimatedContent, FadeContent } from "@/components/Content";
import { ShinyText } from "@/components/Text"

const about = () => {
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
      name: "muatmuat",
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

  return (
    <main className="ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto bg-grayBg rounded-xl shadow-xl py-5 my-2 border border-grayBorder xs:px-1">
      <section className="items-center px-5">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[#626262] w-2 h-2"></div>
          <span className="text-grayTextContent text-xl sm:text-lg xs:text-sm font-bold">
            More About Me
          </span>
        </div>
        <span className="text-grayText text-justify text-base sm:text-sm leading-8 sm:!leading-6 pt-2 block">
          A Front End Web Developer with experience and expertise in creating
          attractive and responsive user interfaces. Do you need a website that
          is not only functional but also visually stunning? I am ready to help
          you achieve those goals. I invite you to explore the diverse range of
          projects I have undertaken, highlighting my skills, creativity, and
          attention to detail.
        </span>
      </section>
      <section className="flex justify-between bg-grayBorder rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 sm:gap-4">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[#626262] w-2 h-2"></div>
          <span className="text-grayTextContent text-xl sm:text-lg xs:text-sm font-bold">
            Journey Experience
          </span>
        </div>
        {office.map((key) => {
          return (
            <FadeContent
              blur={true}
              duration={1300}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="flex justify-between bg-[#373737] rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 xs:gap-4 ">
                <div className="flex justify-between items-center text-white xs:flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-5 h-5">{key.icon}</div>
                    <span className="font-bold text-base sm:text-sm">
                      {key.name}
                    </span>
                  </div>
                  <span className="font-normal text-base sm:text-sm">
                    {key.year}
                  </span>
                </div>
                <div className="flex gap-3 xs:flex-col">
                  <span className="text-grayText text-sm font-semibold bg-[#424242] rounded-xl py-1 px-3 w-fit">
                    {key.role}
                  </span>
                  <span className="text-grayText text-sm font-semibold bg-[#424242] rounded-xl py-1 px-3 w-fit flex items-center">
                    {key.status}
                  </span>
                </div>
              </div>
            </FadeContent>
          );
        })}
      </section>
      <section className="flex justify-between bg-grayBorder rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 sm:gap-4">
        <div className="w-full grid grid-cols-7 sm:flex sm:flex-wrap gap-5 items-center sm:justify-center justify-items-center">
          {stack.map((key) => {
            return (
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
                <Link
                  to={key.link}
                  className="p-3 w-fit h-fit ease-in-out text-white flex items-center justify-center"
                >
                  {key.icon}
                </Link>
              </AnimatedContent>
            );
          })}
        </div>
      </section>
      <section className="flex justify-center items-center lg:bg-grayBorder lg:rounded-xl lg:shadow-xl lg:border lg:border-grayBorder p-5 flex-col gap-5 sm:gap-4">
        <span className="text-white text-3xl font-bold">
          Let's Work Together.
        </span>
        <ShinyText
          text="Creating your own or business website with me."
          speed={4}
          className="text-grayText text-base sm:text-sm"
        />
        <div className="flex gap-3 mt-2">
          <Button
            className="border-none xs:text-sm"
            icon={<BiSend className="text-[#8F8F8F]" />}
            onClick={() => window.open("mailto:oyojwork@gmail.com")}
          >
            Hire me
          </Button>
          <Button
            className="bg-transparent border border-grayBorder xs:text-sm"
            icon={<BiSolidFileBlank className="text-[#8F8F8F]" />}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Zzl5JJBTmtMHhEteBrJMqJdBgLer9ZUQ/view?usp=drive_link"
              )
            }
          >
            My CV
          </Button>
        </div>
      </section>
    </main>
  );
};

export default about;
