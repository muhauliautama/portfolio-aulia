import { TiHome } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { HiDocument } from "react-icons/hi2";
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
      icon: <HiDocument className="icon-sidebar" size="30px" />,
      url: "/cv",
    },
  ];

  return (
    <div className="flex flex-col gap-8 bg-[#FCC503] w-fit p-5 pt-14 pb-14 rounded-[28px] fixed right-5 top-[40%]">
      {data.map((key) => {
        return (
          <Link to={key.url} key={key.id}>
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
