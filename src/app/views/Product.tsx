import React from "react";

// Components
import CustomHeader from "../components/CustomHeader";

// Assets
import mobileSvg from "../../../public/assets/mobile.svg";
import webSvg from "../../../public/assets/web.svg";
import iphone from "../../../public/assets/iphone.svg";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard";

export default function Product() {
  return (
    <section className="py-shorter3">
      <CustomHeader label="Our Product" />
      <section className="flex justify-between px-normal">
        <section className="w-[38%] flex flex-col gap-5">
          <CustomCard
            src={mobileSvg}
            width={80}
            height={80}
            alt="Mobile Svg"
            cardTitle="Mobile Apps"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            className="h-[217px] bg-white"
            classNameHeader="text-black"
            classNameDesc="text-[#555555]"
          />
          <CustomCard
            src={webSvg}
            width={80}
            height={80}
            alt="Mobile Svg"
            cardTitle="Website"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            className="self-center w-[95%] border-2 border-white h-[174px]"
            classNameHeader="text-white"
            classNameDesc="text-white"
          />
        </section>
        <section className="w-[60%] bg-white rounded-2xl p-[40px] h-[415px] flex flex-col gap-6">
          <figure className="flex justify-center gap-3">
            {Array(3)
              ?.fill(3)
              ?.map((_, index) => {
                return (
                  <Image
                    key={index}
                    src={iphone}
                    width={80}
                    height={140}
                    alt={`iphone-${index}`}
                  />
                );
              })}
          </figure>
          <section className="flex flex-col gap-3 text-center">
            <h3 className="font-medium text-3xl text-black">Mobile Apps</h3>
            <p className="text-[#555555]">
              Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
              fitur sesuka anda. <br /> Bisa untuk aplikasi transaksi jual beli,
              Aplikasi kasir, Aplikasi Informasi, maupun <br /> Aplikasi chat
              dengan fitur GPS.
            </p>
          </section>
          <CustomButton
            label="Pelajari Selengkapnya"
            className="w-fit rounded-lg mx-auto shadow-lg"
          />
        </section>
      </section>
    </section>
  );
}
