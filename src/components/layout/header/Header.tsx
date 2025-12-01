'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Gnav from '@/components/layout/gnav/Gnav';
import * as ThemeToggle from '@/features/theme-toggle/components';

const Header = () => {
  const pathname = usePathname();
  const isTopPage = pathname === '/';
  const HeadingTag = isTopPage ? 'h1' : 'div';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-background sticky top-0 z-10 h-[60px] px-[30px] transition-shadow duration-200 select-none ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex h-full items-center justify-between">
        <HeadingTag className="-ml-[30px] h-full text-sm font-medium tracking-widest">
          <Link href="/" className="grid h-full cursor-pointer place-items-center px-[30px]">
            UNKNOWN CEREMONY
          </Link>
        </HeadingTag>
        <div className="flex h-full flex-1 items-center gap-4">
          <Gnav />
        </div>
        <div className="ml-[12.5px]">
          <ThemeToggle.ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
