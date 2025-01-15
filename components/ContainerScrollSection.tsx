"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "./ui/ContainerScroll";
import ScImage from "../assets/images/code-typescript-01.png";
interface ContainerScrollSectionProps {
  title: string;
  subtitle: string;
  image?: string;
}
const ContainerScrollSection: React.FC<ContainerScrollSectionProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              {title} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {title}
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={ScImage || ""}
          alt="hero"
          height={763}
          width={1101}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ContainerScrollSection;
