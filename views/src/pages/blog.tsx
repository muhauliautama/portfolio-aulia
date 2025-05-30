const BlogContent = ({ dark }: { dark: boolean }) => {
  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !dark ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-lightBorder"
      }`}
    >
      <section className="items-center px-5">
        <div className="flex gap-4 items-center">
          <div
            className={`rounded-full ${
              !dark ? "bg-[#626262]" : "bg-red-400"
            } w-2 h-2`}
          ></div>
          <span
            className={`${
              !dark ? "text-grayTextContent" : "text-lightText"
            } text-xl sm:text-lg xs:text-sm font-bold`}
          >
            Blog
          </span>
        </div>
      </section>

      <section className="flex items-center justify-center min-h-[400px] relative">
        <div className="relative">
          <h1
            className={`text-4xl sm:text-2xl font-bold glitch-text ${
              !dark ? "text-grayTextContent" : "text-lightText"
            }`}
            style={{
              textShadow: `2px 0 ${!dark ? "#49c628" : "#ff0000"}, -2px 0 ${
                !dark ? "#ff0000" : "#49c628"
              }`,
            }}
          >
            Work Under Development
          </h1>
          <style>
            {`
              .glitch-text {
                animation: glitch 1s linear infinite;
              }
              @keyframes glitch {
                2%, 64% {
                  transform: translate(2px, 0) skew(0deg);
                }
                4%, 60% {
                  transform: translate(-2px, 0) skew(0deg);
                }
                62% {
                  transform: translate(0, 0) skew(5deg);
                }
              }
            `}
          </style>
        </div>
      </section>
    </main>
  );
};

export default BlogContent;
