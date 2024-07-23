import { BiLogoGithub, BiCodeAlt } from "react-icons/bi";
import Button from "@/components/Button";

const projects = () => {
  return (
    <main className="ff-1 flex flex-col h-fit text-start gap-3 px-3 w-auto bg-grayBg rounded-xl shadow-xl py-5 my-2 border border-grayBorder xs:px-1">
      <section className="flex justify-center items-center lg:bg-grayBorder lg:rounded-xl lg:shadow-xl lg:border lg:border-grayBorder p-5 flex-col gap-5 sm:gap-4">
        <BiCodeAlt size={100} className="text-white" />
        <span className="text-white text-base text-center font-semibold w-[500px] md:w-auto">
          I'm working on a list of projects, please be patient. In the meantime,
          you can see a some of projects that I have already placed in the
          GitHub repositories
        </span>
        <Button
          className="border-none xs:text-sm"
          icon={<BiLogoGithub className="text-[#8F8F8F]" />}
          onClick={() => window.open("https://github.com/ajyoor")}
        >
          My Github
        </Button>
      </section>
    </main>
  );
};

export default projects;
