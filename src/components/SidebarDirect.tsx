import {
  BiDiamond,
  BiReceipt,
  BiCube,
  BiHomeAlt,
  BiUserCircle,
  BiPlusCircle,
} from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
import Button from "./Button";
const SidebarDirect = () => {
  const url = useLocation();
  const data = [
    {
      icon: <BiHomeAlt className="icon-sidebar text-[#8F8F8F]" size="28px" />,
      url: "/",
    },
    {
      icon: (
        <BiUserCircle className="icon-sidebar text-[#8F8F8F]" size="28px" />
      ),
      url: "/about",
    },
    {
      icon: <BiCube className="icon-sidebar text-[#8F8F8F]" size="28px" />,
      url: "/projects",
    },
  ];

  return (
    <header className="flex flex-col gap-8 bg-[#FCC503] w-full rounded-[28px] z-50 md:sticky md:flex-row md:top-0 md:rounded-xl md:justify-between md:shadow-xl md:bg-grayBg md:p-3 md:border md:border-grayBorder">
      <div className="flex items-center gap-10 sm:gap-5 xs:gap-4">
        {data.map((key) => {
          return (
            <Link
              to={key.url}
              key={key.id}
              className={`icon-sidebarr text-[#000] ${
                url.pathname == key.url &&
                "bg-[#373737] text-white rounded-full text-[10px] p-1"
              }`}
            >
              {key.icon}
            </Link>
          );
        })}
      </div>
      <Button
        className="sm:text-xs sm:px-3 sm:font-bold"
        icon={<BiPlusCircle className="text-[#8F8F8F]" />}
        onClick={() => console.log("hire me click")}
      >
        Hire me
      </Button>
    </header>
  );
};

export default SidebarDirect;
