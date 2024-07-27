import { Routes, Route, useLocation } from "react-router-dom";
import HomeContent from "@/pages/home";
import AboutContent from "@/pages/about";
import ProjectsContent from "@/pages/projects";
import { useContext } from "react";
import { DarkMode } from "@/context/DarkMode";

const Root = () => {
  const location = useLocation();
  const { darkMode } = useContext(DarkMode);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeContent dark={darkMode} />} />
      <Route path="/about" element={<AboutContent dark={darkMode} />} />
      <Route path="/projects" element={<ProjectsContent dark={darkMode} />} />
    </Routes>
  );
};

export default Root;
