import FadeIn from "@/utils/FadeIn";
import SlideIn from "@/utils/SlideIn";
import React from "react";

export default function BuildYourBase() {
  return (
    <div className="bg-[#151412] flex h-screen w-full">
      <div className="max-w-[1200px] mx-auto md:mt-[5%]">
        <div className="space-y-5 text-center">
          <SlideIn delay={0.5}>
            <span className="primary-text !text-white/60 text-center">
              What Happens Here
            </span>
          </SlideIn>
          <SlideIn delay={0.7}>
            <span className="headings">COFFEE BUILD YOUR BASE</span>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
