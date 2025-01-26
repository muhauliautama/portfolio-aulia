import { useContext } from "react";
import "./App.css";
import Root from "@/routes/Root.js";
import { DarkMode } from "./context/DarkMode";
import { BiCube, BiHomeAlt, BiUserCircle, BiPlusCircle } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { PiSunDimFill } from "react-icons/pi";

function App() {
 const { darkMode, setDarkMode } = useContext(DarkMode);
 const url = useLocation();
 const data = [
   {
     icon: (
       <BiHomeAlt
         className={`icon-sidebar ${
           !darkMode ? "text-[#8f8f8f]" : "text-white"
         }`}
         size="28px"
       />
     ),
     url: "/",
   },
   {
     icon: (
       <BiUserCircle
         className={`icon-sidebar ${
           !darkMode ? "text-[#8f8f8f]" : "text-white"
         }`}
         size="28px"
       />
     ),
     url: "/about",
   },
   {
     icon: (
       <BiCube
         className={`icon-sidebar ${
           !darkMode ? "text-[#8f8f8f]" : "text-white"
         }`}
         size="28px"
       />
     ),
     url: "/projects",
   },
 ];
  return (
    <div
      className={`${
        !darkMode ? "bg-[#161616]" : "bg-lightBg"
      } min-h-full w-[800px] md:w-auto p-3 container`}
    >
      <header
        className={`flex gap-8 z-50 sticky flex-row top-0 rounded-xl justify-between shadow-xl p-3 border w-auto ${
          !darkMode
            ? "bg-grayBg border-grayBorder"
            : "bg-lightBg2 border-lightBorder"
        }`}
      >
        <div className="flex items-center gap-10 sm:gap-5 xs:gap-4">
          {data.map((key) => {
            return (
              <Link
                key={key.url}
                to={key.url}
                className={`icon-sidebarr text-[#000] ${
                  url.pathname == key.url &&
                  `${
                    !darkMode ? "bg-[#373737]" : "bg-lightText"
                  } text-white rounded-full text-[10px] p-1`
                }`}
              >
                {key.icon}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-1">
          <button
            className="border-none bg-transparent hover:shadow-none flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:border"
            onClick={() => setDarkMode(!darkMode)}
          >
            {!darkMode ? <MdDarkMode size={28} /> : <PiSunDimFill size={28} />}
          </button>
          <button
            className={`sm:text-xs sm:px-3 sm:font-bold flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border ${
              !darkMode ? "bg-[#2E2E2E]" : "bg-lightText"
            }`}
            onClick={() => window.open("mailto:oyojwork@gmail.com")}
          >
            <BiPlusCircle
              className={`${!darkMode ? "text-[#8F8F8F]" : "text-white"}`}
            />
            Hire me
          </button>
        </div>
      </header>
      <Root></Root>
    </div>
  );
}

export default App;
