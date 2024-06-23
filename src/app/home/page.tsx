import Banner from "@/components/view/Banner.tsx/Banner";
import BuildYourBase from "@/components/view/BuildYourBase/BuildYourBase";
import OurMenu from "@/components/view/OurMenu/OurMenu";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <BuildYourBase />
      <OurMenu />
    </div>
  );
}
