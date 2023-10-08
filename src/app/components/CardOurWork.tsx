import Image from "next/image";

type TSectionStyle = {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
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
      className="rounded-lg overflow-hidden p-5 lg:py-24 flex max-lg:flex-col lg:justify-between max-lg:h-fit relative lg:w-[873px] lg:h-[520px]"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />
      <Image
        src={src}
        alt=""
        className="object-cover h-[329px] lg:aspect-video rounded-lg w-fit lg:w-[65%]"
      />
      <section className="flex flex-col w-full lg:w-[30%] gap-3 mt-5">
        <h3 className="font-semibold text-3xl lg:text-center">{header}</h3>
        <p className="text-lg">{desc}</p>
      </section>
    </section>
  );
}
