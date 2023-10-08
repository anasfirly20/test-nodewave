// Assets
import background from "../../../public/assets/background.webp";
import code from "../../../public/assets/code.svg";
import head from "../../../public/assets/head.svg";

// Components
import CustomButton from "../components/CustomButton";

// Miscellaneous
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[80vh] max-lg:mt-3 flex flex-col justify-center gap-4 relative">
      <div className="absolute h-full w-full bg-gradient-to-t from-black/70 from-5% to-transparent to-90%" />
      <Image
        src={background}
        width={1512}
        height={881}
        alt="Background image"
        className="absolute top-[-89px] right-0 -z-10 h-[100%]"
        priority={true}
      />
      <h3 className="text-4xl lg:text-5xl font-semibold leading-snug relative w-fit z-10">
        Make Your Own <br className="max-lg:hidden" /> Website and Mobile
        Application <br className="max-lg:hidden" /> With Nodewave
        <Image
          src={code}
          width={30}
          height={30}
          alt="sss"
          className="absolute -top-6 lg:-left-4 rotate-6"
          priority={true}
        />
        <Image
          src={head}
          width={33}
          height={33}
          alt="sss"
          className="absolute bottom-2 left-[24.5rem] max-lg:hidden"
          priority={true}
        />
      </h3>
      <CustomButton label="Get Started Now" className="w-fit z-10" />
      <p className="text-xl lg:text-2xl mt-4 z-10">
        Create Mobile Applications and Websites for Companies or Your Business{" "}
        <br className="max-lg:hidden" />
        Have a transparent pricing, easy and straightforward development process
      </p>
    </section>
  );
}
