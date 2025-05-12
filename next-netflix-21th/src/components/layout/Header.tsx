"use client";

import { useRouter } from "next/navigation";

import { headerNavItems } from "@/constants/navItems";

import Logo from "@/public/icons/header/logo.svg";

const Header = () => {
  const router = useRouter();

  return (
    <div className="fixed top-6 z-10 h-[57px] w-[375px] pr-[21px] pl-4">
      <div className="flex w-full items-center gap-[25.32px]">
        <Logo
          className="h-[57px] w-[56.67px] cursor-pointer"
          onClick={() => router.push("/home")}
        />
        <ul className="flex flex-1 justify-between gap-[25.32px] text-[17px]">
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
