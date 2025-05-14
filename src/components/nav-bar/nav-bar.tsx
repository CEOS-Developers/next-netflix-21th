'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from './nav-items';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav className="bg-background-01 absolute bottom-[27px] z-990 flex h-12 w-full justify-between pt-2">
      {navItems.map(({ href, label, Icon }) => {
        const isActive = pathName.startsWith(href);

        return (
          <Link key={href} href={href} className="flex flex-1 flex-col items-center">
            <span className="flex h-6 w-6">
              <Icon className={isActive ? 'text-grayscale-02-white' : 'text-grayscale-01'} />
            </span>
            <span
              className={`text-caption-02 mt-[-10px] ${isActive ? 'text-grayscale-02-white' : 'text-grayscale-01'}`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
