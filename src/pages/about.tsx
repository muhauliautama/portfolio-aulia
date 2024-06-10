import { motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ width: "100%",
        transform: "translateY(0px)",
        position: "absolute"}}
    >
      about
    </motion.div>
  );
};

export default about;
