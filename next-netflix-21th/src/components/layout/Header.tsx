"use client";

import { useRouter } from "next/navigation";

import { headerNavItems } from "@/constants/navItems";

import Logo from "@/public/icons/header/logo.svg";

const Header = () => {
  const router = useRouter();

  return (
    <div className="fixed top-6 w-[375px] h-[57px] z-10 pl-4 pr-[21px]">
      <div className="flex items-center gap-[25.32px] w-full">
        <Logo
          className="w-[56.67px] h-[57px] cursor-pointer"
          onClick={() => router.push("/home")}
        />
        <ul className="flex flex-1 gap-[25.32px] justify-between text-[17px]">
          {headerNavItems.map(({ label, path }) => (
            <li
              key={label}
              className="subhead2 cursor-pointer hover:text-gray-100"
              onClick={() => router.push(path)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
