"use client";

import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import ComingSoonIcon from "@/components/icons/ComingSoonIcon";
import DownloadsIcon from "@/components/icons/DownloadsIcon";
import MoreIcon from "@/components/icons/MoreIcon";
import cn from "@/utils/cn";
import { usePathname } from "next/navigation";

const NAVBAR_ITEMS = [
  {
    key: 0,
    name: "Home",
    destination: "/browse",
    icon: HomeIcon,
  },
  {
    key: 1,
    name: "Search",
    destination: "/search",
    icon: SearchIcon,
  },
  {
    key: 2,
    name: "Coming Soon",
    destination: "/commingsoon",
    icon: ComingSoonIcon,
  },
  {
    key: 3,
    name: "Downloads",
    destination: "/downloads",
    icon: DownloadsIcon,
  },
  {
    key: 4,
    name: "More",
    destination: "/more",
    icon: MoreIcon,
  },
];

const NavBar = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="fixed bottom-0 flex h-[3.5rem] w-full max-w-[450px] bg-black" />
    );
  }

  return (
    <nav className="fixed bottom-0 flex h-[3.5rem] w-full max-w-[450px] bg-black py-2">
      {NAVBAR_ITEMS.map((item) => {
        const selectedPath = pathname.includes(item.destination);
        const Icon = item.icon;
        return (
          <Link
            key={item.key}
            href={item.destination}
            className={cn(
              "selectedPath flex w-full cursor-pointer flex-col items-center justify-center gap-1 text-center text-[.5rem] font-medium text-[#8C8787]",
              {
                "text-white": selectedPath,
              },
            )}
          >
            <Icon />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default NavBar;
