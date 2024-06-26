import Image from "next/image";
import React from "react";
import banner from "../../../../public/assets/banner/home-1-slider.jpg";
import style from "./banner.module.css";
import FadeIn from "@/utils/FadeIn";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <div className={`${style.bgWrap}`}>
        <Image
          alt="Banner"
          src={banner}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={`${style.bgText} bg-black/30 text-white flex justify-center items-center flex-col  px-2 md:px-4`}
      >
        <div className="flex justify-center items-center flex-col max-w-[1200px] space-y-5">
          <FadeIn delay={0.05}>
            <span className="headings">Artisan Cappuccinos</span>
          </FadeIn>
          <FadeIn delay={0.8}>
            <span className="sub-heading">
              Handcrafted Cappuccinos Infused with Italian <br /> Passion and
              Expertise, A Taste of Authentic Tradition
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <Link href='/menu' className="cursor-pointer uppercase bg-[#6F4E37] font-bold px-10 py-2 border transition-all duration-300 ease-in-out hover:shadow-md transform hover:scale-105 !z-0">
              EXPLORE
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
