'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Footer = () => {
  const pathname = usePathname();
  const isTopPage = pathname === '/';

  return (
    <footer
      className={`w-full px-[30px] py-4 text-center text-xs ${
        isTopPage ? 'fixed bottom-0 left-0 z-10' : ''
      }`}
    >
      <motion.small
        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
        initial={isTopPage ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={isTopPage ? { duration: 1.5, ease: 'linear', delay: 3.8 } : { duration: 0 }}
      >
        &copy; UNKNOWN CEREMONY
      </motion.small>
    </footer>
  );
};

export default Footer;
