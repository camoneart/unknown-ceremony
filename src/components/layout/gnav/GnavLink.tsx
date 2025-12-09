'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GnavLink = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative grid place-items-center py-[5px] px-[12.5px] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-1/2 after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.215,0.61,0.355,1)] ${
        isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
      } ${className}`}
      style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
    >
      {children}
    </Link>
  );
};

export default GnavLink;
