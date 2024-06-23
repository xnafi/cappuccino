import React from "react";
import img1 from "../../../../public/assets/OurMenu/menu.jpg";
import Image from "next/image";
import FadeIn from "@/utils/FadeIn";
import style from "./style.module.css";
import { coffeeMenu } from "@/data/CoffeeMenu";

export default function OurMenu() {
  return (
    <div className=" flex h-[140vh] w-[100vw]">
      <div className={`${style.bgWrap}`}>
        <Image
          alt="Banner"
          src={img1}
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
        className={`${style.bgText} bg-black/80 text-white flex flex-col  px-2 md:px-4 h-[140vh] items-center justify-center`}
      >
        <div className="flex flex-col space-y-2 text-center">
          <FadeIn delay={0.05}>
            <span>What Happens Here</span>
          </FadeIn>
          <FadeIn delay={0.8}>
            <span className="heading2">FAVORITE COFFEE FLAVOURS</span>
          </FadeIn>
        </div>
        <div className="max-w-[1400px] space-y-3 mt-10">
          <div className="w-full flex h-full flex-col lg:flex-row lg:space-y-0 lg:space-x-5">
            <div className="border rounded-sm w-full h-full lg:w-[100%]">
              {/* menu 1 */}
              <span className="sub-heading">Menu 1</span>
              <div className="flex flex-col space-y-2 text-left w-full">
                {coffeeMenu.slice(0, 8).map((item) => {
                  return (
                    <div
                      className="grid grid-cols-3 justify-between p-6"
                      key={item.id}
                    >
                      <div className="border flex-nowrap w-full">
                        <span className="text-left uppercase">
                          name : {item.name}
                        </span>
                      </div>
                      <div className="border flex-nowrap w-full">
                        <span className="text-left border-b-3"></span>
                      </div>
                      <div className="border flex-nowrap w-full">
                        <span className="text-left uppercase">
                          name : {item.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* menu 2 */}
            <div className="border rounded-sm w-full lg:w-[100%] h-full">
              <span className="sub-heading">Menu 2</span>
              <div className="flex flex-col space-y-3 text-left w-full h-full">
                {coffeeMenu.slice(9, 18).map((item) => {
                  return (
                    <div key={item.id}>
                      <span className="text-left">name: {item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
