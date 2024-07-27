import { BiLogoGithub, BiCodeAlt } from "react-icons/bi";

const projects = ({ dark }: { dark: any }) => {
  const darkMode = dark;
  return (
    <main
      className={`ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto  rounded-xl shadow-xl py-5 my-2 border xs:px-1 ${
        !darkMode
          ? "bg-grayBg border-grayBorder"
          : "bg-lightBg2 border-lightBorder"
      }`}
    >
      <section
        className={`${
          !darkMode
            ? "lg:bg-grayBorder lg:border-grayBorder"
            : "lg:bg-lightBg2 lg:border-lightBorder"
        } flex justify-center items-center lg:rounded-xl lg:shadow-xl lg:border p-5 flex-col gap-5 sm:gap-4`}
      >
        <BiCodeAlt
          size={100}
          className={`${!darkMode ? "text-white" : "text-lightText"}`}
        />
        <span className="text-white text-base text-center font-semibold w-[500px] md:w-auto">
          I'm working on a list of projects, please be patient. In the meantime,
          you can see a some of projects that I have already placed in the
          GitHub repositories
        </span>
        <button
          className={`${
            !darkMode ? "bg-[#2E2E2E]" : "bg-lightText"
          } border-none xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md hover:shadow-xl hover:border`}
          onClick={() => window.open("https://github.com/ajyoor")}
        >
          <BiLogoGithub
            className={`${!darkMode ? "text-[#8f8f8f]" : "text-white"}`}
          />
          My Github
        </button>
      </section>
    </main>
  );
};

export default projects;
