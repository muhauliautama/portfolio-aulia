import "./App.css";
import Root from "@/routes/Root.js";
import SidebarLink from "@/components/SidebarDirect";
import { useLocation } from "react-router-dom";
function App() {
  const url = useLocation();
  const baseBg = [
    {
      miniURL: "/",
      class: "bg-gradient-to-r from-gray-300 to-gray-500",
    },
    {
      miniURL: "/experience",
      class: "bg-[#0D0D0B] text-white",
    },
    {
      miniURL: "/skills",
      class: "bg-[#0D0D0B] text-white",
    },
  ];
  const classURL = baseBg.find(
    (key) => key.miniURL === url.pathname && key.class
  );

  return (
    <div
      className={`p-0 m-0 mx-auto relative ${classURL?.class} h-screen w-screeen`}
    >
      <SidebarLink />
      <Root></Root>
    </div>
  );
}

export default App;
