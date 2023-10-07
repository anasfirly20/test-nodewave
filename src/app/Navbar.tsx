import Image from "next/image";

// Assets
import logo from "../../public/assets/logo.webp";

// Constants
import { navItems } from "./constants/constants";
import CustomButton from "./components/CustomButton";

export default function Navbar() {
  const lastIndex = navItems.length - 1;

  return (
    <nav className="flex justify-between items-center sticky top-0 py-4">
      <Image src={logo} width={200} height={200} alt="Logo" />
      <ul className="flex items-center gap-5">
        {navItems?.map((item, index) => {
          return index === lastIndex ? (
            <CustomButton label={item?.label} />
          ) : (
            <li key={item?.id}>{item?.label}</li>
          );
        })}
      </ul>
    </nav>
  );
}
