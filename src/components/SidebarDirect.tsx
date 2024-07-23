import { BiCube, BiHomeAlt, BiUserCircle, BiPlusCircle } from "react-icons/bi";
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
    <header className="flex gap-8 z-50 sticky flex-row top-0 rounded-xl justify-between shadow-xl bg-grayBg p-3 border border-grayBorder w-auto">
      <div className="flex items-center gap-10 sm:gap-5 xs:gap-4">
        {data.map((key) => {
          return (
            <Link
              to={key.url}
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
        onClick={() => window.open("mailto:oyojwork@gmail.com")}
      >
        Hire me
      </Button>
    </header>
  );
};

export default SidebarDirect;
