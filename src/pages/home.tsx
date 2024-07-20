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
import Button from "@/components/Button";
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
const home = () => {
  const yearCount = new Date().getFullYear();

  return (
    <main className="ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto md:bg-grayBg md:rounded-xl md:shadow-xl md:py-5 md:my-2 md:border md:border-grayBorder xs:px-1">
      <section className="hidden md:flex justify-between items-center px-5">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[#626262] w-2 h-2"></div>
          <span className="text-grayTextContent text-xl sm:text-lg xs:text-sm font-bold">
            Front End Web Developer
          </span>
        </div>
        <div className="rounded-full bg-[#263A2F] w-fit h-fit p-2 flex items-center gap-1">
          <div className="rounded-full bg-green-500 w-2 h-2"></div>
          <span className="uppercase text-[#049753] text-xs px-2 sm:hidden">
            Available For Work
          </span>
        </div>
      </section>
      <section className="hidden md:flex flex-col gap-2 justify-center items-center text-center my-12">
        <div className="border border-grayBorder w-[160px] h-[160px] overflow-hidden rounded-full p-3 bg-[#2C2C2C]">
          <img src={ImgPerson} alt="img" />
        </div>
        <span className="text-white text-4xl font-bold my-3 sm:text-2xl">
          I'm Airlangga
        </span>
        <span className="text-grayText text-md sm:text-sm">
          Front End Web Developer from Malang, Indonesia.
        </span>
        <span className="text-grayText text-md sm:text-sm">
          Currently still learning about Typescript :)
        </span>
        <div className="flex gap-3 mt-6">
          <Button
            className="border-none xs:text-sm"
            icon={<BiSend className="text-[#8F8F8F]" />}
            onClick={() => console.log("hire me click")}
          >
            Hire me
          </Button>
          <Button
            className="bg-transparent border border-grayBorder xs:text-sm"
            icon={<BiSolidFileBlank className="text-[#8F8F8F]" />}
            onClick={() => console.log("cv click")}
          >
            My CV
          </Button>
        </div>
      </section>
      <section className="hidden md:flex justify-between bg-grayBorder rounded-xl shadow-xl border border-grayBorder p-5 sm:flex-col sm:gap-4 ">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[#626262] w-2 h-2"></div>
          <span className="text-grayTextContent text-xl sm:text-base font-bold">
            Follow Me
          </span>
        </div>
        <div className="flex gap-3 items-center sm:justify-center sm:items-center sm:gap-6 xs:gap-4">
          {sosmedLink.map((key) => {
            return (
              <Link
                className="bg-[#373737] text-white rounded-full p-2 hover:bg-grayBg"
                to={key.link}
              >
                {key.icon}
              </Link>
            );
          })}
        </div>
      </section>
      <section className="hidden md:flex justify-center bg-grayBorder rounded-xl shadow-xl border border-grayBorder p-5">
        <span className="text-grayTextContent text-xs font-thin">
          @{yearCount} Last Updated - Airlangga Joyonegoro
        </span>
      </section>
    </main>
  );
};

export default home;
