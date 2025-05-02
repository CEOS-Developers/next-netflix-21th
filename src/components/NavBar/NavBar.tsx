'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { navItems } from './navItems';

export default function NavBar() {
  // const pathName = usePathname();

  return (
    <nav className="bg-background-01 absolute bottom-[27px] flex h-12 w-full justify-between pt-2 pr-[29px] pl-[26px]">
      {navItems.map(({ href, label, Icon }) => {
        return <div></div>;
      })}
    </nav>
  );
}
