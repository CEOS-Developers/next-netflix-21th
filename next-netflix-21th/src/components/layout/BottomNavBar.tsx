"use client";

import { usePathname, useRouter } from "next/navigation";

import { bottomNavItems } from "@/constants/navItems";

const BottomNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 z-99 flex h-12 w-[375px] items-center bg-gray-400 pr-[29px] pl-[26px]">
      {bottomNavItems.map(({ label, icon: Icon, path, spacing }) => {
        const isActive = pathname === path;

        return (
          <button
            key={label}
            onClick={() => router.push(path)}
            className={`flex shrink-0 cursor-pointer flex-col items-center justify-between gap-[1px] hover:text-white ${spacing} ${
              isActive ? "text-white" : "text-gray-200"
            }`}
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <Icon />
            </div>
            <span className="text-caption5 min-h-[6px]">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
