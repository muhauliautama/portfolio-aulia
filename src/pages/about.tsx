import { motion } from "framer-motion";
import ImgPerson from "@/assets/kadal.png";

const about = () => {
  return (
    <motion.div
      className="about h-screen flex relative"
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{
        width: "100%",
        transform: "translateY(0px)",
        position: "absolute",
      }}
    >
      <div className="rounded-full object-contain bg-[#FCC503] w-[400px] h-[400px]  fixed top-14 left-[100px] overflow-hidden">
        <img src={ImgPerson} className="w-[260px] h-[400px] m-auto mt-[30px]" alt="" />
      </div>
      <div className="w-[20%] bg-[#0D0D0B] text-white">ireng</div>
      <div className="w-[80%] bg-gray-100">poteh</div>
    </motion.div>
  );
};

export default about;
