'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Gnav from '@/components/layout/gnav/Gnav';

const HeroSection = () => {
  return (
    // <section className="fixed inset-0 top-[35px] z-10 px-[30px] select-none">
    <section className="fixed inset-0 z-10 select-none">
      {/* <div className="relative flex flex-col items-center h-full"> */}
      <div className="relative grid place-content-center gap-[40px] h-full pb-[20px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5, ease: 'linear', delay: 1.85 }}
        >
          {/* <h1 className="text-[7vw] md:text-[8vw] 2xl:text-[115px] whitespace-nowrap leading-none tracking-[0.1em]"> */}
          <h1 className="text-[30px] whitespace-nowrap leading-none tracking-[0.2em]">
            <Link
              href="/"
              className="inline-block"
              style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.6)' }}
            >
              UNKN<span style={{ marginInline: '-0.09em' }}>O</span>WN CEREM
              <span style={{ marginInline: '-0.055em' }}>O</span>NY
            </Link>
          </h1>
        </motion.div>

        <motion.div
          // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-[200px] text-[20px]"
          className="flex items-center justify-center gap-[200px] text-[20px]"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'linear', delay: 3.8 }}
        >
          <Gnav ulClassName="flex items-center gap-[130px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
