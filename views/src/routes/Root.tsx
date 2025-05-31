import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomeContent from "@/pages/home";
import AboutContent from "@/pages/about";
import ProjectsContent from "@/pages/projects";
import BlogContent from "@/pages/blog";
import { useContext } from "react";
import { DarkMode } from "@/context/DarkMode";
import BlogDetailContent from "@/pages/detail";

const Root = () => {
  const location = useLocation();
  const { darkMode } = useContext(DarkMode);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomeContent dark={darkMode} />} />
      <Route path="/about" element={<AboutContent dark={darkMode} />} />
      <Route path="/projects" element={<ProjectsContent dark={darkMode} />} />
      <Route path="/blog" element={<BlogContent dark={darkMode} />} />
      <Route
        path="/blog/detail/:id"
        element={<BlogDetailContent dark={darkMode} />}
      />
    </Routes>
  );
};

export default Root;
