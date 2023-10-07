import Image from "next/image";

// Assets
import logo from "../../public/assets/logo.webp";

// Constants
import { navItems } from "./constants/constants";
import CustomButton from "./components/CustomButton";
import Link from "next/link";

export default function Navbar() {
  const lastIndex = navItems.length - 1;

  return (
    <nav className="flex justify-between items-center py-4 z-10 pr-shorter2">
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="Logo" />
      </Link>
      <ul className="flex items-center gap-5">
        {navItems?.map((item, index) => {
          return index === lastIndex ? (
            <CustomButton label={item?.label} className="font-medium text-lg" />
          ) : (
            <li className="font-medium text-lg" key={item?.id}>
              {item?.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
