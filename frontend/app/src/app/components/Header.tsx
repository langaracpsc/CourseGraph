import { FC } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import langaraLogo from "../assets/images/langara-logo.png";

const Header: FC = () => {
  return (
    <div className="sticky top-0 left-0 h-14 w-full flex justify-between items-center px-4 py-2 z-30">
      <Link href="/Menu" className="focus:outline-none rounded-sm">
        <IoHome className="text-3xl text-white" />
      </Link>
      <a href="https://langara.ca/">
        <Image
          className="object-cover"
          src={langaraLogo}
          alt="Langara College logo"
          height={40}
          width={40}
        />
      </a>
    </div>
  );
};

export default Header;
