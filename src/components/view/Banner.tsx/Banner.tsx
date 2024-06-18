import Image from "next/image";
import React from "react";
import banner from "../../../../public/assets/banner/home-1-slider.jpg";
import style from "./banner.module.css";

export default function Banner() {
  return (
    <div className="h-screen flex flex-col mx-auto">
      <div className={`${style.bgWrap}`}>
        <Image
          alt="banner"
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
      <div className={`${style.bgText} w-full mb-[80%] lg:mb-[40%]`}>
        Image Component
        <br />
        as a Background
      </div>
    </div>
  );
}
