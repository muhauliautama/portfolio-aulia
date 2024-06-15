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
      <span className="text-[52px] font-bold ml-[50px] mt-10">Experience</span>
      {/* ornamen kanan */}
      <div className="w-[300px] h-[70px] rounded-full bg-white fixed right-[-80px] top-[40px]"></div>
      {/* ornamen kiri */}
      <div className="w-[400px] h-[400px] rounded-full bg-[#191917] fixed left-[-250px] top-[200px]"></div>
      <div className="w-[100px] h-[100px] rounded-full bg-[#f7c002] fixed left-[-50px] top-[180px]"></div>

      {/* garis */}
      <div className="w-1 h-[285px] rounded-xl bg-[#686868] fixed top-[35%] left-[47%]"></div>
      <div className="grid grid-cols-[repeat(2,auto)] justify-center gap-x-[80px] gap-y-10 m-auto h-scrdeen">
        {jejak.map((key) => {
          return (
            <div
              key={key.id}
              className="flex flex-row flex-wrap items-center gap-5 w-[500px] h-fit"
            >
              <div className="rounded-full p-4 bg-[#F7C002] border-none w-fit h-fit">
                <BsBagCheckFill color="black" size={24} />
              </div>
              <div className="flex flex-col ff-1">
                <span className="font-bold text-lg">{key.tahun}</span>
                <span className="font-medium">
                  {key.role} - {key.company}
                </span>
                <span className="font-normal text-xs">{key.jobdesk}</span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default experience;
