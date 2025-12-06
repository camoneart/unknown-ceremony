'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Gnav from '@/components/layout/gnav/Gnav';

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
    handleScroll(); // 初期状態のチェック

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isTopPage) return null;

  return (
    <header
      className={`sticky top-0 z-10 grid h-auto place-items-center px-[30px] transition-all duration-300 select-none ${
        isScrolled ? 'bg-black/30 backdrop-blur-sm' : ''
      }`}
    >
      <div className="flex w-full flex-col items-center justify-center gap-[10px] py-[15px]">
        <HeadingTag className="text-[28px] tracking-[0.2em]">
          <Link
            href="/"
            className="grid place-items-center"
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
          >
            UNKNOWN CEREMONY
          </Link>
        </HeadingTag>

        <Gnav
          className="flex items-center gap-[15px]"
          ulClassName="flex items-center gap-[30px]"
          itemClassName=""
          linkClassName=""
        />
      </div>
    </header>
  );
};

export default Header;
