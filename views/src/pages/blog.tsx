import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogGradient from "../assets/blog-gradient.svg";

interface BlogInterface {
  id: string;
  title: string;
  content: string;
  status: string;
  updatedAt: string;
}

const BlogContent = ({ dark }: { dark: boolean }) => {
  const darkMode = dark;
  const [blog, setBlog] = useState<BlogInterface[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(process.env.API_DEV + "blogs");
      console.log(res.data);
      setBlog(res.data);
    };

    fetchBlog();
  }, []);

  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !dark ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-lightBorder"
      } px-5`}
    >
      <input
        className="w-full h-8 rounded-md bg-transparent border px-3"
        placeholder="Search Blog"
      />
      <section className="flex flex-col gap-5">
        {blog.length > 0
          ? blog.map((key, idx) => {
              if (key.status.toLowerCase() === "published")
                return (
                  <Link
                    key={idx}
                    to={"/blog/detail/" + key.id}
                    className={`group relative flex justify-between overflow-hidden ${
                      !darkMode
                        ? "bg-[#373737] border-grayBorder text-white"
                        : "bg-lightBg border-lightBorder text-grayTextContent"
                    } rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 xs:gap-4 hover:opacity-90`}
                  >
                    <div
                      className="absolute right-0 top-0 w-1/2 h-full opacity-20 transform transition-all duration-300 group-hover:opacity-30 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(https://w.wallhaven.cc/full/je/wallhaven-je9ldp.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                        maskImage:
                          "linear-gradient(to left, black, transparent)",
                        WebkitMaskImage:
                          "linear-gradient(to left, black, transparent)",
                      }}
                    ></div>
                    <span
                      className={`text-xl font-bold relative z-10 ${
                        darkMode && "!text-lightText"
                      }`}
                    >
                      {key.title}
                    </span>
                    <span className="text-sm font-medium relative z-10 text-justify">
                      {key.content}
                    </span>
                  </Link>
                );
            })
          : Array(5)
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
              })}
      </section>
    </main>
  );
};

export default BlogContent;
