"use client";

import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/constants/navItems";

const BottomNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 w-[375px] h-12 bg-[#121212] flex items-center pl-[26px] pr-[29px] z-99">
      {navItems.map(({ label, icon: Icon, path, spacing }) => {
        const isActive = pathname === path;

        return (
          <button
            key={label}
            onClick={() => router.push(path)}
            className={`cursor-pointer flex flex-col items-center justify-between shrink-0 gap-[1px] hover:text-white ${spacing} ${
              isActive ? "text-white" : "text-gray-200"
            }`}
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <Icon />
            </div>
            <span className="caption5 min-h-[6px]">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
