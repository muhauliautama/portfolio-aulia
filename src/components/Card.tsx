import { useNavigate } from "react-router-dom";

export interface CardProps {
  key?: string;
  children?: React.ReactNode;
  dark: boolean;
  className?: string;
}

interface CardBlogsProps extends CardProps {
  url: string;
}

const Card = ({ children, dark, className, key }: CardProps) => {
  return (
    <main
      key={key}
      className={`ff-1 flex flex-col h-fit text-start gap-3 w-auto rounded-xl shadow-xl py-5 my-2 border xs:px-1 transition-colors ${
        !dark ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-white"
      } ${className} px-5`}
    >
      {children}
    </main>
  );
};

export default Card;

export const CardSecondary = ({
  children,
  dark,
  className,
  key,
}: CardProps) => {
  return (
    <section
      key={key}
      className={`transition-colors ${
        !dark ? "bg-grayBg border-grayBorder" : "bg-lightBg2 border-white"
      } ${className} flex justify-between rounded-xl shadow-xl border p-5 flex-col gap-5 sm:gap-4`}
    >
      {children}
    </section>
  );
};

export const CardTertiary = ({ children, dark, className, key }: CardProps) => {
  return (
    <div
      key={key}
      className={`transition-colors flex justify-between ${
        !dark
          ? "bg-[#373737] border-grayBorder"
          : "bg-lightBg border-lightBorder"
      } ${className} justify-between bg-[#373737] rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 xs:gap-4`}
    >
      {children}
    </div>
  );
};

export const CardImageContainer = ({
  src,
  alt,
  dark,
}: {
  src: string;
  alt: string;
  dark: boolean;
}) => (
  <div
    className={`flex flex-col gap-1 !rounded-xl p-3 relative overflow-hidden ${
      dark && "cursor-pointer"
    }`}
  >
    <img
      src={src}
      className="w-[500px] sm:w-[300px] h-[250px] sm:h-[180px] object-contain mx-auto"
      alt={alt}
    />
  </div>
);

export const CardBlogs = ({
  children,
  dark,
  className,
  key,
  url,
}: CardBlogsProps) => {
  let navigate = useNavigate();
  return (
    <div
      key={key}
      className={`group relative transition-colors flex justify-between overflow-hidden cursor-pointer ${
        !dark
          ? "bg-[#373737] border-grayBorder text-white"
          : "bg-lightBg border-lightBorder text-grayTextContent"
      } ${className} rounded-xl shadow-xl border border-grayBorder p-5 flex-col gap-5 xs:gap-4 hover:opacity-90`}
      onClick={() => navigate(url)}
    >
      {children}
    </div>
  );
};
