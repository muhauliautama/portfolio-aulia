import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";

const BlogDetailContent = ({ dark }: { dark: boolean }) => {
  const darkMode = dark;
  const [blogDetail, setBlogDetail] = useState<BlogInterface>();
  const url = useParams();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const res = await axios.get(
        process.env.API_DEV + "blogs/detail/" + url.id
      );
      console.log(res.data);
      setBlogDetail(res.data);
    };

    fetchBlogDetail();
  }, []);

  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !dark ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-lightBorder"
      } px-5`}
    >
      <Link to="/blog" className="flex items-center gap-4">
        <IoArrowBack color={!darkMode ? "#8f8f8f" : "#fff"} size={32} />
        <span
          className={`${
            !dark ? "text-grayTextContent" : "text-lightText"
          } text-xl sm:text-lg xs:text-sm font-bold`}
        >
          Back
        </span>
      </Link>
      {blogDetail !== undefined ? (
        <div className="flex flex-col gap-5 text-grayTextContent">
          <img
            className="h-48 w-full object-cover rounded-xl shadow-xl border border-grayBorder"
            loading="lazy"
            src="https://w.wallhaven.cc/full/je/wallhaven-je9ldp.jpg"
            alt={blogDetail.title + "-imgAlt"}
            srcSet={blogDetail.title + "-imgSet"}
          />
          <span
            className={`text-xl font-bold relative z-10 flex flex-col ${
              darkMode && "!text-lightText"
            }`}
          >
            {blogDetail.title}
          </span>
          <span className="text-sm font-medium relative z-10 text-justify">
            {blogDetail.content}
          </span>
          <div className="flex flex-col gap-2">
            {[
              "author : airlangga joyonegoro",
              "Dibuat " +
                new Date(blogDetail?.updatedAt).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }),
            ].map((item, i) => {
              return (
                <small key={i} className="capitalize !font-medium !text-xs">
                  {item}
                </small>
              );
            })}
          </div>
        </div>
      ) : (
        Array(5)
          .fill(null)
          .map((_, i) => {
            return (
              <div
                key={i}
                className={`h-32 ${
                  !darkMode
                    ? "bg-[#373737] border-grayBorder text-white"
                    : "bg-lightBg border-lightBorder"
                } rounded-xl shadow-xl border border-grayBorder animate-pulse opacity-30`}
              ></div>
            );
          })
      )}
    </main>
  );
};

export default BlogDetailContent;
