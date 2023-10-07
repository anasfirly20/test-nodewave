import Image from "next/image";
import React from "react";

type TProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  cardTitle: string;
  p: string;
  className: string;
  classNameHeader: string;
  classNameDesc: string;
};

export default function CustomCard({
  src,
  width,
  height,
  alt,
  cardTitle,
  p,
  className,
  classNameHeader,
  classNameDesc,
}: TProps) {
  return (
    <section
      className={`rounded-2xl py-[48px] px-[20px] flex gap-6 ${className}`}
    >
      <Image src={src} width={width} height={height} alt={alt} />
      <div className="flex flex-col justify-center gap-2">
        <h4 className={`font-medium text-2xl ${classNameHeader}`}>
          {cardTitle}
        </h4>
        <p className={classNameDesc}>{p}</p>
      </div>
    </section>
  );
}
