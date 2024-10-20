import Link from "next/link";
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import langaraLogo from "../assets/images/langara-logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-14 w-screen flex justify-between items-center px-4 py-2 z-30">
      <Link href="/Menu" className="focus:outline-none focus:outline-orange-500 transition-colors duration-500 rounded-sm">
        <IoHome className="text-3xl" />
      </Link>
      <Image
        className="object-cover"
        src={langaraLogo}
        alt="Langara College logo"
        height={40}
        width={40}
      />
    </div>
  );
}

export default Header;
