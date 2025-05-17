"use client";

import { useRouter } from "next/navigation";

import { headerNavItems } from "@/constants/navItems";

import Logo from "@/public/icons/header/logo.svg";

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-6 z-10 h-[57px] w-[375px] pr-[21px] pl-4">
      <nav className="flex w-full items-center gap-[25.32px]">
        <button
          onClick={() => router.push("/home")}
          className="h-[57px] w-[56.67px] cursor-pointer"
          aria-label="홈으로 이동"
        >
          <Logo className="h-full w-full" />
        </button>

        <ul className="flex flex-1 justify-between gap-[25.32px] text-[17px]">
          {headerNavItems.map(({ label, path }) => (
            <li key={label}>
              <button
                className="subhead2 cursor-pointer hover:text-gray-100"
                onClick={() => router.push(path)}
                aria-label={`${label} 페이지로 이동`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
