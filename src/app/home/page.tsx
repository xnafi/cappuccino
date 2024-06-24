import Banner from "@/components/view/Banner.tsx/Banner";
import BuildYourBase from "@/components/view/BuildYourBase/BuildYourBase";
import OurMenu from "@/app/menu/page";
import React from "react";
import PhotoGallery from "../../components/view/Gallery/Gallery";


export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <BuildYourBase />
      <OurMenu />
      <PhotoGallery />
    </div>
  );
}
