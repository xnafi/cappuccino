import React from "react";
import img1 from "../../../public/assets/OurMenu/menu.jpg";
import Image from "next/image";
import FadeIn from "@/utils/FadeIn";
import style from "./style.module.css";
import { coffeeMenu } from "@/data/CoffeeMenu";
import StaggerChild from "@/utils/StaggerChild";

export default function OurMenu() {
  return (
    <div className=" flex w-[100vw]">
      <div
        className={`${style.bgWrap} h-[415vh] md:h-[350vh] lg:h-[190vh] 2xl:h-[170vh]`}
      >
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
        className={`${style.bgText} bg-black/80 text-white flex flex-col  px-2 md:px-4 h-[415vh] md:h-[350vh] lg:h-[190vh] 2xl:h-[170vh] w-full items-center justify-center`}
      >
        <div className="flex flex-col space-y-2 text-center">
          <FadeIn delay={0.05}>
            <span>What Happens Here</span>
          </FadeIn>
          <FadeIn delay={0.06}>
            <span className="heading2">FAVORITE COFFEE FLAVOURS</span>
          </FadeIn>
        </div>
        <div className="space-y-3 mt-10 w-full max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-4 justify-center">
            {/* menu 1 */}
            <div className="border rounded-sm p-3 md:p-5 md:px-4 flex flex-col space-y-2 col-span-1 lg:col-span-6">
              <span className="heading2 py-4 text-center">Menu 1</span>
              <div className="flex flex-col space-y-10 text-left w-full">
                {coffeeMenu.slice(0, 8).map((item, index) => (
                  <StaggerChild key={item.id} delay={index * 0.1}>
                    <div className="grid grid-cols-4 justify-between">
                      {/* name and image */}
                      <div className="col-span-2 space-x-1 flex-nowrap flex flex-col w-full md:flex-row space-y-1">
                        <span className="text-left uppercase">
                          <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </span>
                        <span className="text-left uppercase">
                          {item.name.slice(0, 10)}
                        </span>
                      </div>
                      {/* border */}
                      <div className="flex-nowrap border-t-2 mt-3"></div>
                      {/* price */}
                      <div className="flex-nowrap w-full text-right">
                        <span className="text-left uppercase text-wrap">
                          price: {item.price}
                        </span>
                      </div>
                    </div>
                  </StaggerChild>
                ))}
              </div>
            </div>
            {/* menu 2 */}
            <div className="border rounded-sm p-3 md:p-5 md:px-4 flex flex-col space-y-2 col-span-1 lg:col-span-6">
              <span className="heading2 py-4 text-center">Menu 2</span>
              <div className="flex flex-col space-y-10 text-left w-full">
                {coffeeMenu.slice(9, 17).map((item, index) => (
                  <StaggerChild key={item.id} delay={index * 0.1}>
                    <div className="grid grid-cols-4 justify-between">
                      {/* name and image */}
                      <div className="col-span-2 space-x-1 flex-nowrap flex flex-col w-full md:flex-row space-y-1">
                        <span className="text-left uppercase">
                          <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </span>
                        <span className="text-left uppercase">
                          {item.name.slice(0, 10)}
                        </span>
                      </div>
                      {/* border */}
                      <div className="flex-nowrap border-t-2 mt-3"></div>
                      {/* price */}
                      <div className="flex-nowrap w-full text-right">
                        <span className="text-left uppercase text-wrap">
                          price: {item.price}
                        </span>
                      </div>
                    </div>
                  </StaggerChild>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
