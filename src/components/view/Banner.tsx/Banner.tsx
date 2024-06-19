"use client";
import Image from "next/image";
import React from "react";
import banner from "../../../../public/assets/banner/home-1-slider.jpg";
import style from "./banner.module.css";
import { motion, stagger } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 1,
    transition: {
      delay: 0.05,
    },
  }),
};
export default function Banner() {
  return (
    <>
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
        className={`${style.bgText} bg-black/30 text-white flex justify-center items-center flex-col`}
      >
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex justify-center items-center flex-col max-w-[1200px] space-y-5"
        >
          <span className="headings">Artisan Cappuccinos</span>
          <span className="sub-heading">
            Handcrafted Cappuccinos Infused with Italian <br /> Passion and
            Expertise, A Taste of Authentic Tradition
          </span>
          <button className="cursor-pointer uppercase bg-[#6F4E37] font-bold px-10 py-2 border transition-all duration-300 ease-in-out hover:shadow-md transform hover:scale-105">
            EXPLORE
          </button>
        </motion.div>
      </div>
    </>
  );
}
