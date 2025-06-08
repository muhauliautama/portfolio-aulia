import { useEffect, useState, useMemo } from "react";
import Input from "@/components/Input";
import Card, { CardBlogs } from "@/components/Card";
import { AnimatedContent, DotCircleContent } from "@/components/Content";
import { motion } from "framer-motion";
import { FileX2, Search, X } from "lucide-react";
import { CiClock2 } from "react-icons/ci";
import axios from "axios";

export interface BlogInterface {
  id: string;
  title: string;
  content: string;
  photo: string;
  status: string;
  updatedAt: string;
}

const BlogContent = ({ dark }: { dark: boolean }) => {
  const [blog, setBlog] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlog = useMemo(() => {
    if (!searchTerm) {
      return blog;
    }
    return blog.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blog, searchTerm]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(process.env.API_DEV + "blogs");

        setBlog(
          res.data.filter(
            (x: BlogInterface) => x.status?.toLowerCase() === "published"
          )
        );
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return (
    <Card dark={dark} className="!gap-4">
      <DotCircleContent dark={dark} title="Blogs" />
      {!loading && (
        <Input
          dark={dark}
          placeholder="Search Blogs"
          icon={{
            iconLeft: (
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-grayText"
                size={18}
              />
            ),
            iconRight: searchTerm.length > 0 && (
              <X
                onClick={() => setSearchTerm("")}
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-grayText"
              />
            ),
          }}
          onChange={setSearchTerm}
          value={searchTerm}
        />
      )}
      {loading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className={`h-32 ${
                  !dark
                    ? "bg-[#373737] border-grayBorder text-white"
                    : "bg-lightBg border-lightBorder"
                } rounded-xl shadow-xl border border-grayBorder animate-pulse opacity-30`}
              ></div>
            ))}
        </div>
      ) : filteredBlog.length > 0 ? (
        <AnimatedContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {filteredBlog.map((key, idx) => (
              <CardBlogs
                dark={dark}
                key={"blog-" + idx}
                url={`/blog/detail/${key.id}`}
                className="!gap-3"
              >
                <div
                  className="absolute right-0 top-0 w-1/2 h-full opacity-20 transform transition-all duration-300 group-hover:opacity-30 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${key.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    maskImage: "linear-gradient(to left, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to left, black, transparent)",
                  }}
                ></div>
                <span
                  className={`text-xl font-bold relative z-10 ${
                    dark && "!text-lightText"
                  }`}
                >
                  {key.title}
                </span>
                <div
                  className={`flex gap-2 items-center font-semibold text-xs capitalize mb-2 ${
                    dark ? "text-grayText" : "text-grayText"
                  }`}
                >
                  <CiClock2 size={16} strokeWidth={1} />
                  {new Date(key?.updatedAt || "").toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
                <span className="container-blog-content text-sm font-medium relative z-10 mt-1 text-justify line-clamp-4 text-grayText">
                  <div dangerouslySetInnerHTML={{ __html: key.content }} />
                </span>
              </CardBlogs>
            ))}
          </div>
        </AnimatedContent>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center justify-center gap-6 py-12 ${
            dark ? "text-white" : "text-grayTextContent"
          }`}
        >
          <FileX2
            size={80}
            className="opacity-50"
            color={dark ? "#e98074" : "#8f8f8f"}
          />
          <span className="text-lg font-semibold">Blog belum tersedia</span>
        </motion.div>
      )}
    </Card>
  );
};

export default BlogContent;
