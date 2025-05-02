'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navItems';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav className="bg-background-01 absolute bottom-[27px] flex h-12 w-full justify-between pt-2 pr-[29px] pl-[26px]">
      {navItems.map(({ href, label }) => {
        const isActive = pathName.startsWith(href);

        return (
          <Link key={href} href={href} className="flex flex-col items-center">
            <span className="flex h-6 w-6 items-center justify-center"></span>
            <span className={`text-caption-02 ${isActive ? 'text-grayscale-02-white' : 'text-grayscale-01'}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
