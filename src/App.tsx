import "./App.css";
// font
// import "./assets/otterco/Otterco-ExtraBold.otf"
// import "./assets/otterco/Otterco-SemiBold.otf"
// import "./assets/otterco/Otterco-Bold.otf"
// import "./assets/otterco/Otterco-Medium.otf"
// import "./assets/otterco/Otterco-Regular.otf"
// import "./assets/otterco/Otterco-.otf"

import Root from "@/routes/Root.js";
import SidebarLink from "@/components/SidebarDirect";
// import { useLocation } from "react-router-dom";

function App() {
  // const url = useLocation();
  // const baseBg = [
  //   {
  //     miniURL: "/",
  //     // class: "bg-gradient-to-t from-gray-300 to-gray-500",
  //     // class: "bg-[#161616]",
  //   },
  //   {
  //     miniURL: "/experience",
  //     // class: "bg-[#0D0D0B] text-white",
  //   },
  //   {
  //     miniURL: "/skills",
  //     // class: "bg-[#0D0D0B] text-white",
  //   },
  // ];
  // const classURL = baseBg.find(
  //   (key) => key.miniURL === url.pathname && key.class
  // );

  return (
    <div
      // className={`p-0 m-0 mx-auto relative ${classURL?.class} h-full w-screen sm:w-auto sm:p-3`}
      className={`bg-[#161616] h-screen w-[800px] md:w-auto p-3 container`}
    >
      <SidebarLink />
      <Root></Root>
    </div>
  );
}

export default App;
