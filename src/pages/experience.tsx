import { motion } from "framer-motion";
import { BsBagCheckFill } from "react-icons/bs";
const experience = () => {
  const jejak = [
    {
      id: 1,
      tahun: "2022 - Present",
      role: "Frontend Web Developer",
      company: "PT. AZlogistik Dot Com",
      jobdesk: "uasu kabeh",
    },
    {
      id: 2,
      tahun: "2022",
      role: "Frontend Web Developer",
      company: "CV. Nusantara Jagung Malang",
      jobdesk: "CV. Nusantara Jagung Malang (Lecturer Project)",
    },
    {
      id: 3,
      tahun: "2022",
      role: "Fullstack Web Developer",
      company: "FEB UB",
      jobdesk: "E-Voting Pemilwa Jurusan FEB UB 2022 (Freelance)",
    },
    {
      id: 4,
      tahun: "2021",
      role: "Fullstack Web Developer",
      company: "Perum Bulog Malang",
      jobdesk: "Perum Bulog Malang (Internship)",
    },
    {
      id: 5,
      tahun: "2019",
      role: "Networking",
      company: "Xinau IT Sidoarjo",
      jobdesk: "Xinau IT Sidoarjo (Training)",
    },
    {
      id: 6,
      tahun: "2019",
      role: "Backend Developer",
      company: "PT. Geomedia Sinergi Malang",
      jobdesk: "PT. Geomedia Sinergi Malang (Internship)",
    },
  ];
  return (
    <motion.div
      className="experience flex flex-col h-screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <span className="text-[70px] font-bold ml-[50px] mt-10 sm:text-[40px] sm:mx-auto sm:py-8 sm:underline sm:underline-offset-[15px] ff-3">
        Experience
      </span>
      {/* ornamen kanan */}
      <div className="w-[300px] h-[70px] rounded-full bg-white fixed right-[-80px] top-[40px] sm:top-[40%] sm:w-[200px] sm:hidden"></div>
      {/* ornamen kiri */}
      <div className="w-[400px] h-[400px] rounded-full bg-[#191917] fixed left-[-250px] top-[200px] sm:top-0 sm:hidden"></div>
      <div className="w-[100px] h-[100px] rounded-full bg-[#f7c002] fixed left-[-50px] top-[180px] sm:top-0 sm:hidden"></div>

      {/* garis */}
      <div className="w-1 h-[285px] rounded-xl bg-[#686868] fixed top-[35%] left-[47%] sm:hidden"></div>
      <div className="grid grid-cols-[repeat(2,auto)] sm:grid-cols-1 justify-center gap-x-[80px] gap-y-10 m-auto h-screen sm:h-auto sm:overflow-y-auto sm:overflow-x-hidden sm:m-5">
        {jejak.map((key) => {
          return (
            <div
              key={key.id}
              className="flex flex-row flex-wrap items-center gap-5 w-[500px] h-fit z-10"
            >
              <div className="rounded-full p-4 bg-[#F7C002] border-none w-fit h-fit sm:hidden">
                <BsBagCheckFill
                  className="sm:text-[10px]"
                  color="black"
                  size={24}
                />
              </div>
              <span className="font-bold text-sm bg-[#f7c002]  shadow-xl rounded-full w-[50px] h-[50px] px-2 py-[15px] text-black hidden sm:block">
                {key?.tahun?.includes("Present") ? "Now'" : key.tahun}
              </span>
              <div className="flex flex-col ff-1">
                <span className="font-bold text-lg sm:hidden">{key.tahun}</span>
                <span className="font-medium sm:hidden">
                  {key.role} - {key.company}
                </span>
                <div className="hidden sm:block">
                  <span className="font-bold text-md hidden sm:block">
                    {key.role}
                  </span>
                  <span className="font-bold text-md hidden sm:block">
                    {key.company}
                  </span>
                </div>
                <span className="font-normal text-xs sm:hidden">
                  {key.jobdesk}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default experience;
