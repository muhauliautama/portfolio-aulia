import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomeContent from "@/pages/home";
import AboutContent from "@/pages/about";

const Root = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Root;
