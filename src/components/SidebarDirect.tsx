import { TiHome } from "react-icons/ti";
import {
  BsPersonFill,
  BsFillFileEarmarkCheckFill,
  BsFillFolderFill,
  BsLightningFill,
} from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
const SidebarDirect = () => {
  const url = useLocation();
  const data = [
    { id: 1, icon: <TiHome className="icon-sidebar" size="30px" />, url: "/" },
    {
      id: 2,
      icon: <BsPersonFill className="icon-sidebar" size="30px" />,
      url: "/about",
    },
    {
      id: 3,
      icon: <BsFillFileEarmarkCheckFill className="icon-sidebar" size="30px" />,
      url: "/experience",
    },
    {
      id: 4,
      icon: <BsFillFolderFill className="icon-sidebar" size="30px" />,
      url: "/projects",
    },
    {
      id: 5,
      icon: <BsLightningFill className="icon-sidebar" size="30px" />,
      url: "/skills",
    },
  ];

  return (
    <div className="flex flex-col gap-8 bg-[#FCC503] w-fit p-5 pt-14 pb-14 rounded-[28px] fixed right-5 top-[25%] z-50">
      {data.map((key) => {
        return (
          <Link to={key.url} key={key.id} className="text-[#000]">
            {key.icon}{" "}
            <div
              className={`selected-icon ${url.pathname != key.url && "hidden"}`}
            ></div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarDirect;
