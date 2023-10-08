import logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { footerItems } from "../constants/constants";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-shorter">
      <Image src={logo} width={250} height={250} alt="Nodewave logo" />
      <section className="flex flex-col gap-14 pt-shorter2 text-center">
        <h6 className="font-medium text-xl">PT NODEWAVE SOLUSI TEKNOLOGI</h6>
        <p className="font-medium text-xl">
          Graha Pena Surabaya <br /> Jl. Ahmad Yani no. 88 Surabaya <br /> Phone
          : +62811258280 <br /> Email : support@nodewave.id
        </p>
        <section className="flex gap-5 justify-center items-center">
          {footerItems?.map((item, index) => {
            return (
              <a
                key={index}
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image src={item} width={30} height={30} alt={item} />
              </a>
            );
          })}
        </section>
      </section>
    </footer>
  );
}
