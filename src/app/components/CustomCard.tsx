import Image from "next/image";
import arrow from "../../../public/assets/arrow.svg";

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
      className={`rounded-2xl py-[48px] px-[20px] flex gap-6 relative ${className}`}
    >
      <Image
        src={arrow}
        width={20}
        height={20}
        alt="Arrow svg"
        className="absolute right-10 bottom-8 w-fit hover:translate-x-2 transition-transform duration-300 hover:cursor-pointer"
      />
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
