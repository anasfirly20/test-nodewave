import Image from "next/image";
import React from "react";

type TSectionStyle = {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  minHeight: string;
  minWidth: string;
  backdropFilter: string;
};

type TProps = {
  sectionStyle: TSectionStyle;
  src: any;
  header: string;
  desc: string;
};

export default function CardOurWork({
  sectionStyle,
  src,
  header,
  desc,
}: TProps) {
  return (
    <section
      className="rounded-md p-5 py-24 flex justify-between relative"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />
      <Image
        src={src}
        alt=""
        className="object-cover h-[329px] aspect-video rounded-lg w-[65%]"
      />
      <section className="flex flex-col w-[30%] gap-3 mt-5">
        <h3 className="font-semibold text-3xl text-center">{header}</h3>
        <p className="text-lg">{desc}</p>
      </section>
    </section>
  );
}
