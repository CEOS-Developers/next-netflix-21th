import Logo from "@/assets/netflix-logo-icon.svg";
import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <div className="flex gap-6 items-center px-4 py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ul className="flex font-body-1 flex-1 justify-around">
        <li className="cursor-pointer">TV Shows</li>
        <li className="cursor-pointer">Movies</li>
        <li className="cursor-pointer">My List</li>
      </ul>
    </div>
  );
};

export default HeaderNavigation;
