import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaXTwitter, FaWhatsapp, FaLink } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Card from "@/components/Card";
import { BlogInterface } from "./blog";
import "@/App.css";

const BlogDetailContent = ({ dark }: { dark: boolean }) => {
  const [blogDetail, setBlogDetail] = useState<BlogInterface>();
  const [isCopied, setIsCopied] = useState(false);
  const url = useParams();
  const blogTitle = blogDetail?.title || "";
  const currentUrl = window.location.href;
  const generateText = `Kayaknya cuma aku doang yang suka pusing mikirin ${blogTitle}. Biar nggak pusing sendiri, aku jadiin tulisan aja. Ada yang senasib? 😭 #curhat #relateable`;

  // Use import.meta.env for Vite environment variables
  const API_URL = import.meta.env.VITE_API_DEV || 'https://api.example.com/';

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(generateText)}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${generateText} ${currentUrl}`
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const res = await axios.get(
          API_URL + "blogs/detail/" + url.id
        );
        setBlogDetail(res.data);
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      }
    };

    if (url.id) {
      fetchBlogDetail();
    }
  }, [url.id, API_URL]);

  return (
    <>
      <Card dark={dark}>
        <Link to="/blog" className="flex items-center gap-4 mb-3">
          <IoArrowBack color={!dark ? "#8f8f8f" : "#fff"} size={32} />
          <span
            className={`${
              !dark ? "text-grayTextContent" : "text-lightText"
            } text-xl sm:text-lg xs:text-sm font-bold`}
          >
            Back
          </span>
        </Link>
        <div
          className={`flex gap-2 items-center font-semibold text-xs capitalize mb-2  ${
            !dark ? "text-grayText" : "text-white"
          }`}
        >
          <CiClock2 size={16} strokeWidth={1} />
          {new Date(blogDetail?.updatedAt || "").toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        {blogDetail !== undefined ? (
          <div className="flex flex-col gap-5 text-grayTextContent">
            <span
              className={`text-2xl font-bold relative z-10 flex flex-col ${
                dark && "!text-lightText"
              }`}
            >
              {blogDetail.title}
            </span>
            <img
              className="h-48 w-full object-cover rounded-xl shadow-xl border border-grayBorder"
              loading="lazy"
              src={blogDetail.photo}
              alt={blogDetail.title + "-imgAlt"}
            />
            <span
              className={`container-dcontent-blog text-base font-medium leading-relaxed relative z-10 text-justify ${
                !dark ? "text-grayText" : "text-white"
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
            </span>
            <div className="flex items-center gap-4 my-4">
              <span
                className={`text-sm font-semibold ${
                  dark ? "text-white" : "text-grayText"
                }`}
              >
                Share:
              </span>
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="text-gray-500 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={22} />
              </a>
              <button
                onClick={handleCopyLink}
                aria-label="Copy link"
                className={`flex items-center gap-2 text-sm font-medium transition-all ${
                  isCopied
                    ? "text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                <FaLink size={20} />
                {isCopied ? "Copied!" : ""}
              </button>
            </div>
          </div>
        ) : (
          Array(4)
            .fill(null)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  className={`h-32 ${
                    !dark
                      ? "bg-[#373737] border-grayBorder text-white"
                      : "bg-lightBg border-lightBorder"
                  } ${
                    i % 2 === 0 ? "h-20" : "h-32"
                  } rounded-xl shadow-xl border border-grayBorder animate-pulse opacity-30`}
                ></div>
              );
            })
        )}
      </Card>
      {blogDetail !== undefined && (
        <Card dark={dark} className="relative !mt-4">
          <div className="absolute inset-0 backdrop-blur-xl bg-black/30 flex items-center justify-center rounded-xl">
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                Comments Section
              </h3>
              <p className="text-gray-200">This feature is coming soon !</p>
              <p className="text-gray-300 text-sm mt-1">
                Stay tuned for updates
              </p>
            </div>
          </div>
          <div className="opacity-[0.5]">
            <div
              className={`h-12  ${
                !dark
                  ? "bg-grayBg border-grayBorder"
                  : "bg-lightBg2 border-lightBorder"
              } rounded-lg mb-4`}
            ></div>
            <div
              className={`h-20  ${
                !dark
                  ? "bg-grayBg border-grayBorder"
                  : "bg-lightBg2 border-lightBorder"
              } rounded-lg mb-4`}
            ></div>
            <div
              className={`h-12  ${
                !dark
                  ? "bg-grayBg border-grayBorder"
                  : "bg-lightBg2 border-lightBorder"
              } rounded-lg`}
            ></div>
          </div>
        </Card>
      )}
    </>
  );
};

export default BlogDetailContent;