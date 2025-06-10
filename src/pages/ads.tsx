import { ShinyText } from "@/components/Text";
import { BiSend, BiSolidFileBlank } from "react-icons/bi";

export const Ads = ({ dark }: { dark: boolean }) => {
  return (
    <section
      className={`border-none flex justify-center items-center lg:rounded-xl lg:shadow-xl lg:border  p-5 flex-col gap-5 sm:gap-4`}
      style={{ boxShadow: "none" }}
    >
      <span
        className={`${
          !dark ? "text-white" : "text-lightText"
        }  text-3xl font-bold`}
      >
        Let's Work Together.
      </span>
      <ShinyText
        text="Creating your own or business website with me."
        speed={3}
        disabled={false}
        className="bg-[#2E2E2E] text-base sm:text-sm"
      />
      <div className="flex gap-3 mt-2">
        <button
          className={` ${
            !dark
              ? "bg-[#2E2E2E] border-none  hover:shadow-xl hover:border"
              : "!border"
          } xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md`}
          onClick={() => window.open("mailto:oyojwork@gmail.com")}
        >
          <BiSend className={`${!dark ? "text-[#8f8f8f]" : "text-white"}`} />
          Hire me
        </button>
        <button
          className={`bg-transparent ${
            !dark
              ? "border-grayBorder hover:shadow-xl hover:border"
              : "border-white"
          } border xs:text-sm flex gap-2 items-center  text-white py-1 px-5 rounded-md`}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Zzl5JJBTmtMHhEteBrJMqJdBgLer9ZUQ/view?usp=drive_link"
            )
          }
        >
          <BiSolidFileBlank
            className={`${!dark ? "text-[#8f8f8f]" : "text-white"}`}
          />
          My CV
        </button>
      </div>
    </section>
  );
};
