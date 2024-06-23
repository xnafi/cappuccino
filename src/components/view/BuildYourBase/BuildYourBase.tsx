import SlideIn from "@/utils/SlideIn";
import Image from "next/image";
import img1 from "../../../../public/assets/buildYourBase/img1.jpg";
import img2 from "../../../../public/assets/buildYourBase/img2.jpg";
import img3 from "../../../../public/assets/buildYourBase/img3.jpg";
import PrimaryButton from "../../../utils/PrimaryButton";

export default function BuildYourBase() {
  return (
    <div className="bg-[#151412] flex h-full lg:h-screen w-[100vw]">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center flex-col space-y-2 px-2 md:px-4 my-10 lg:my-0F">
        <div className="space-y-2 text-center">
          <SlideIn delay={0.5}>
            <span className="primary-text !text-white/60 text-center">
              What Happens Here
            </span>
          </SlideIn>
          <SlideIn delay={0.7}>
            <span className="headings">COFFEE BUILD YOUR BASE</span>
          </SlideIn>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 pt-[3%] mx-auto">
          {/* item 1 */}
          <SlideIn delay={0.9}>
            <div className="flex flex-col items-center space-y-2">
              <Image src={img1} width={500} height={400} alt="" />
              <div className="self-start md:self-center lg:self-start space-y-4 w-full md:w-[67%] lg:w-full">
                <span className="sub-heading space-y-2">
                  PLACES TO GET LOST
                </span>
                <p className="primary-text">
                  Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei. Mei an pericula euripidis, hinc
                  partem ei est. Eos ei nisl graecis, vix aperiri consequat an.
                  Eius lorem tincidunt vix atle.
                </p>
                <PrimaryButton text="Learn More" />
              </div>
            </div>
          </SlideIn>
          {/* item 2 */}
          <SlideIn delay={0.9}>
            <div className="flex flex-col items-center  space-y-2">
              <Image src={img2} width={500} height={400} alt="" />
              <div className="self-start space-y-4 w-full md:w-[67%] lg:w-full">
                <span className="sub-heading space-y-2">
                  BEST COFFEE FLAVORS
                </span>
                <p className="primary-text">
                  Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei. Mei an pericula euripidis, hinc
                  partem ei est. Eos ei nisl graecis, vix aperiri consequat an.
                  Eius lorem tincidunt vix atle.
                </p>
                <PrimaryButton text="Learn More" />
              </div>
            </div>
          </SlideIn>
          {/* item 3 */}
          <SlideIn delay={0.9}>
            <div className="flex flex-col items-center">
              <Image src={img3} width={500} height={400} alt="" />
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
