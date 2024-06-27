import FadeIn from "@/utils/FadeIn";
import SelectComponent from "@/utils/SelectComponent";
import { MdGroups2 } from "react-icons/md";
import styles from './Table.module.css';

export default function TableBook() {
  const options = [
    "1 Person",
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6 People",
    "7 People",
    "8 People",
    "9 People",
    "10 People",
    "12 People",
  ];
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  return (
    <div className="bg-[#151412] flex h-full lg:h-screen w-screen">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center flex-col space-y-2 px-2 md:px-4 my-10 lg:my-0">
        {/* headings */}
        <div className="space-y-2 text-center !w-full">
          <FadeIn delay={0.5}>
            <span className="primary-text !text-white/80 text-center">
              Looking For Explore?
            </span>
          </FadeIn>
          <FadeIn delay={0.7}>
            <span className="headings">Book Your Table</span>
          </FadeIn>
        </div>
        {/* inputs */}
        <div className="flex flex-col md:flex-row w-[100%] items-center gap-10 border justify-between !mt-10">
          <SelectComponent options={options} icon={<MdGroups2 />} />
          <span className="sub-heading font-bold">FOR</span>
          <div className={styles["custom-date-input"]}>
            <input
              type="date"
              className="w-full bg-[#151412] text-white"
              min={getTodayDate()}
            />
          </div>

          <span className="sub-heading font-bold">AT</span>
          <SelectComponent options={options} icon={<MdGroups2 />} />
          <button className="cursor-pointer uppercase bg-[#6F4E37] font-bold px-10 py-2 border transition-all duration-300 ease-in-out hover:shadow-md transform hover:scale-105 !z-0">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}
