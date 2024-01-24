'use client';

import Link from 'next/link';
import Appbar from './Appbar';
import { usePathname } from 'next/navigation';

const linkStyle = 'w-20 flex justify-center p-2 rounded-md';
const activeStyle = 'bg-slate-500 text-white';
const inactiveStyle = '';

type GlobalAppbarButtonProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
};

const GlobalAppbarButton = ({
  children,
  href,
  isActive,
}: GlobalAppbarButtonProps) => {
  return (
    <Link
      href={href}
      className={`${linkStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {children}
    </Link>
  );
};

const globalNavs = [
  {
    name: '가계부',
    href: '/',
  },
  {
    name: '주차',
    href: '/parking',
  },
];

export default function GlobalAppbar() {
  const path = usePathname();

  return (
    <Appbar>
      <div className="border flex rounded-md">
        {globalNavs.map(({ name, href }) => (
          <GlobalAppbarButton key={name} href={href} isActive={path === href}>
            {name}
          </GlobalAppbarButton>
        ))}
      </div>
    </Appbar>
  );
}
