import Banner from "@/components/view/Banner.tsx/Banner";
import BuildYourBase from "@/components/view/BuildYourBase/BuildYourBase";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <BuildYourBase />
    </div>
  );
}
