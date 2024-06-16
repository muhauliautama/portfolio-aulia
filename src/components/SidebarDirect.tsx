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
      icon: <BiHomeAlt className="icon-sidebar" size="30px" />,
      url: "/",
    },
    {
      id: 2,
      icon: <BiUserCircle className="icon-sidebar" size="30px" />,
      url: "/about",
    },
    {
      id: 3,
      icon: <BiReceipt className="icon-sidebar" size="28px" />,
      url: "/experience",
    },
    {
      id: 4,
      icon: <BiCube className="icon-sidebar" size="30px" />,
      url: "/projects",
    },
    {
      id: 5,
      icon: <BiDiamond className="icon-sidebar" size="30px" />,
      url: "/skills",
    },
  ];
  // #A01F2B;
  // #AD101B;
  // #E86E2B;FCA311
  // orange;FCC503
  return (
    <div className="flex flex-col gap-8 bg-[#FCC503] items-center sm:bg- w-fit p-5 pt-14 pb-14 rounded-[28px] fixed right-5 top-[25%] z-50 sm:flex-row sm:right-auto sm:w-full sm:bottom-0 sm:top-auto sm:rounded-none sm:justify-center sm:gap-14 sm:shadow-xl sm:p-3 sm:opacity-[0.9]">
      {data.map((key) => {
        return (
          <Link
            to={key.url}
            key={key.id}
            className={`icon-sidebarr text-[#000] ${
              url.pathname == key.url && "bg-white rounded-full text-[10px] p-2"
            }`}
          >
            {key.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarDirect;
