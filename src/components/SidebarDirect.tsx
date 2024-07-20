import {
  BiDiamond,
  BiReceipt,
  BiCube,
  BiHomeAlt,
  BiUserCircle,
} from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
const SidebarDirect = () => {
  const url = useLocation();
  const data = [
    {
      id: 1,
      icon: <BiHomeAlt className="icon-sidebar text-[#8F8F8F]" size="30px" />,
      url: "/",
    },
    {
      id: 2,
      icon: (
        <BiUserCircle className="icon-sidebar text-[#8F8F8F]" size="30px" />
      ),
      url: "/about",
    },
    {
      id: 3,
      icon: <BiReceipt className="icon-sidebar text-[#8F8F8F]" size="28px" />,
      url: "/experience",
    },
    {
      id: 4,
      icon: <BiCube className="icon-sidebar text-[#8F8F8F]" size="30px" />,
      url: "/projects",
    },
    {
      id: 5,
      icon: <BiDiamond className="icon-sidebar text-[#8F8F8F]" size="30px" />,
      url: "/skills",
    },
  ];

  return (
    <header className="flex flex-col gap-8 bg-[#FCC503] items-center w-full p-5 rounded-[28px] fixed z-50 sm:flex-row m:top-0 sm:rounded-xl sm:justify-center sm:gap-10 sm:shadow-xl sm:bg-[#212121] sm:p-2">
      {data.map((key) => {
        return (
          <Link
            to={key.url}
            key={key.id}
            className={`icon-sidebarr text-[#000] ${
              url.pathname == key.url &&
              "bg-[#373737] text-white rounded-full text-[10px] p-2"
            }`}
          >
            {key.icon}
          </Link>
        );
      })}
    </header>
  );
};

export default SidebarDirect;
