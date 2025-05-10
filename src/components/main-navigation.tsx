"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Home from "@/assets/home.svg";
import HomeActive from "@/assets/home-w.svg";
import Search from "@/assets/search.svg";
import SearchActive from "@/assets/search-w.svg";
import ComingSoon from "@/assets/comingsoon.svg";
import Download from "@/assets/download.svg";
import More from "@/assets/more.svg";

const navItems = [
  { icon: Home, label: "Home", href: "/home", activeIcon: HomeActive },
  { icon: Search, label: "Search", href: "/search", activeIcon: SearchActive },
  { icon: ComingSoon, label: "Coming Soon" },
  { icon: Download, label: "Download" },
  { icon: More, label: "More" },
];

const NavIcon = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
};

const MainNavigation = () => {
  const pathname = usePathname();

  // '/' landing page에서는 navigation을 렌더하지 않음
  if (pathname === "/") return <div></div>;

  // '/home', '/search', '/movie' 페이지에서는 navigation 렌더링
  return (
    <div className="bg-[#121212] h-14 flex  px-6 items-center font-caption justify-between">
      {navItems.map(({ icon: Icon, label, href, activeIcon: ActiveIcon }) => {
        if (!href)
          return (
            <div key={label} className="text-[#8C8787]">
              <NavIcon>
                <Icon />
                <span>{label}</span>
              </NavIcon>
            </div>
          );

        const isActive = pathname === href;

        return (
          <Link
            href={href}
            key={label}
            className={isActive ? "text-white" : "text-[#8C8787]"}
          >
            <NavIcon>
              {isActive ? <ActiveIcon /> : <Icon />}
              <span>{label}</span>
            </NavIcon>
          </Link>
        );
      })}
    </div>
  );
};

export default MainNavigation;
