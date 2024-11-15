import Link from "next/link";

interface MenuLinkProps {
  path: string;
  label: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ path, label }) => {
  return (
    <Link
      href={path}
      className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

export default MenuLink;
