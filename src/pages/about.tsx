import { motion } from "framer-motion";
import ImgPerson from "@/assets/kadal.png";
import {
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const about = () => {
  const sosmed = [
    { icon: <BiLogoTwitter size={38} />, path: "https://x.com/ajyoor" },
    {
      icon: <BiLogoInstagramAlt size={38} />,
      path: "https://www.instagram.com/ajyoor/",
    },
    {
      icon: <BiLogoLinkedinSquare size={38} />,
      path: "https://www.linkedin.com/in/airlangga-joyonegoro-97037024a/",
    },
    { icon: <BiLogoGithub size={38} />, path: "https://github.com/ajyoor" },
    { icon: <BiLogoGmail size={38} />, path: "mailto:oyojwork@gmail.com" },
  ];
  return (
    <motion.div
      className="about h-screen flex relative "
      transition={{
        width: "100%",
        transform: "translateY(0px)",
        position: "absolute",
      }}
    >
      <div className="w-[20%] bg-[#0D0D0B] text-white h-full flex flex-col justify-center items-center gap-5 sm:hidden">
        <div className="rounded-full object-contain bg-[#FCC503] w-auto h-auto overflow-hidden z-50 sm:hidden ">
          <img
            src={ImgPerson}
            className="w-auto h-auto m-auto mt-[30px]"
            alt=""
          />
        </div>
        <span className="ff-3 text-[40px] text-[#FCC503]">Lets Connect !</span>
        <div className="flex gap-3">
          {sosmed.map((key) => {
            return (
              <Link
                key={key.path}
                to={key.path}
                target="_blank"
                className="hover:text-[#FCC503]"
              >
                {key.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-[80%] bg-gray-100 py-10 flex flex-col relative -z-50 sm:w-full sm:bg-[#191917] sm:text-white sm:z-10">
        {/* ornamen kanan */}
        <div className="w-[400px] h-[400px] rounded-full bg-gray-200 fixed right-[-250px] top-[40%] sm:hidden"></div>
        <div className="w-[200px] h-[100px] rounded-full bg-[#f7c002] fixed right-[-50px] top-[30px] sm:hidden"></div>
        <div className="w-[300px] h-[100px] rounded-full bg-[#f7c002] fixed -ml-10 overflow-hidden  bottom-[30px] sm:hidden"></div>
        <span className="text-[70px] font-bold mt-10 ff-3 sm:text-center sm:text-[40px] sm:underline sm:underline-offset-[15px] sm:w-full pl-16 pr-52 sm:p-0">
          About Me
        </span>
        <span className="text-[20px] ff-1 leading-8 pl-16 pr-52 sm:p-10 sm:text-justify sm:text-[16px]">
          Hello! My name is Airlangga Joyonegoro. I am a Web Developer and very
          passionate about supporting my work. I like to solve a problem with
          the help of technology. In addition, I also have a high curiosity and
          love to learn something new My last education is in Information
          Systems Brawijaya University and have worked on various Web
          Development projects, I have acquired enough skills and knowledge
          needed to make your project a success. If you're looking for someone
          to bring your vision to life with technical expertise and creativity,
          I'm here to help. Let's discuss how I can support your web project and
          elevate your user experience. Contact me today for a free consultation
          and start your journey towards an impressive and effective website!
        </span>
        <span className="ff-3 text-[40px] text-[#FCC503] hidden sm:block mx-auto mb-3">
          Lets Connect !
        </span>
        <div className="gap-3 hidden sm:flex mx-auto">
          {sosmed.map((key2) => {
            return (
              <Link
                key={key2.path}
                to={key2.path}
                target="_blank"
                className="hover:text-[#FCC503]"
              >
                {key2.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default about;
