import ImgPerson from "@/assets/kadal.png";
import Particles from "@/components/Particle";
import { motion } from "framer-motion";

const home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="ff-1 flex flex-col justify-center h-screen text-start gap-3 px-3 w-auto lg:w-[700px] lg:ml-[200px] sm:">
        {/* <Particles /> */}
        <div className="w-[100px] h-[100px] rounded-full bg-[#f7c002] fixed left-[-50px] top-[200px] sm:hidden"></div>
        <span className="ff-latin text-[40px] mb-[50px] ">
          Airlangga Joyonegoro
        </span>
        <span className="font-[800] text-[30px] lg:text-[50px] ">
          I am
          <br /> Airlangga
          <br /> Front End Web Developer
        </span>
        <span className="text-[12px] lg:text-[16px] ff-1 w-auto lg:w-[500px] sm:text-justify">
          Welcome to my portfolio! Here you will find a showcase of my work as a
          Front End Web Developer. I invite you to explore the diverse range of
          projects I have undertaken, highlighting my skills, creativity, and
          attendtion to detail
        </span>
        <img
          src={ImgPerson}
          className="w-auto h-screen fixed right-28 sm:hidden"
          alt=""
        />
        <div className="flex gap-3 w-100">
          <button className="btn-full sm:w-full">Hire Me</button>
          <button className="btn-outline sm:w-full">More About Me</button>
        </div>
      </div>
    </motion.div>
  );
};

export default home;
