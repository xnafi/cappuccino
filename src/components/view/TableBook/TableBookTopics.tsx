import { Topics } from "@/data/TableBookTopic";
import FadeIn from "@/utils/FadeIn";
import Image from "next/image";
import React from "react";

export default function TableBookTopics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !my-20 lg:!my-10 xl:!my-20 gap-10">
      {Topics.map((items) => {
          return (
            <FadeIn delay={0.5} key={items.id}>
              <div className="flex flex-col gap-y-2 items-center ">
                <Image src={items.image} width={500} height={500} alt="" />
                <span className="sub-heading self-start">{items.name}</span>
                <span className="primary-text">{items.description}</span>
              </div>
            </FadeIn>
          );
      })}
    </div>
  );
}
