"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  "/assets/ImageGallery/1.jpg",
  "/assets/ImageGallery/2.jpg",
  "/assets/ImageGallery/3.jpg",
  "/assets/ImageGallery/4.jpg",
  "/assets/ImageGallery/5.jpg",
  "/assets/ImageGallery/6.jpg",
  "/assets/ImageGallery/7.jpg",
  "/assets/ImageGallery/8.jpg",
  "/assets/ImageGallery/9.jpg",
  "/assets/ImageGallery/10.jpg",
];

const getRandomIndex = (excludeIndex: number) => {
  let newIndex = Math.floor(Math.random() * images.length);
  while (newIndex === excludeIndex) {
    newIndex = Math.floor(Math.random() * images.length);
  }
  return newIndex;
};

const getRandomDelay = () => `${Math.random() * 10}s`;

const PhotoGallery: React.FC = () => {
  const [imageIndexes, setImageIndexes] = useState([0, 8, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index) => getRandomIndex(index))
      );
    }, 10000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 w-full h-full lg:h-screen">
      <div className="w-full mx-auto">
        <div className="text-center">
          <h2 className="text-base text-white/60 font-semibold tracking-wide uppercase">
            Photo Gallery
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white/80 sm:text-4xl my-6">
            Enjoy Our Beautiful Photos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2 gap-1 px-2 md:px-0 lg:mt-[2%]">
          <div
            className={`col-span-1 md:col-span-2 row-span-2 ${styles.fadeIn}`}
            style={{ animationDelay: getRandomDelay() }}
          >
            <Image
              src={images[imageIndexes[0]]}
              width={800}
              height={800}
              alt="Gallery Image"
            />
          </div>
          {/* image 2 */}
          {imageIndexes.slice(1).map((index, i) => (
            <div
              key={i}
              className={`col-span-1 ${styles.fadeIn} h-full w-full`}
              style={{ animationDelay: getRandomDelay() }}
            >
              <Image
                src={images[index]}
                width={400}
                height={600}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
