// Components
import CustomButton from "./CustomButton";

// Assets
import discount from "../../../public/assets/services/discount.svg";

// Miscellaneous
import Image from "next/image";

type TProps = {
  header: string;
  startPrice?: string;
  newPrice: string;
  src: any;
  alt: string;
};

export default function ServicesCard({
  header,
  startPrice,
  newPrice,
  src,
  alt,
}: TProps) {
  return (
    <section className="bg-white flex h-[380px] rounded-2xl overflow-hidden">
      <section className="flex flex-col justify-center text-black w-[55%] p-10 gap-10 text-center">
        <h2 className="font-semibold text-3xl tracking-tighter">{header}</h2>
        <section className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold">Start from</h4>
          {startPrice && (
            <p className="line-through decoration-[#ff3839] text-[#717171] relative w-fit mx-auto">
              Rp, {startPrice}
              <Image
                src={discount}
                width={25}
                height={25}
                alt="discount svg"
                className="absolute -right-3 -top-2"
              />
            </p>
          )}
          <p>Rp, {newPrice}</p>
        </section>
        <CustomButton
          label="Order Now"
          className="text-white lg:w-[70%] mx-auto"
        />
      </section>
      <Image src={src} alt={alt} className="w-[45%] h-full object-cover" />
    </section>
  );
}
