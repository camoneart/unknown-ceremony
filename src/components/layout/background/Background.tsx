'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Background = () => {
  const pathname = usePathname();
  const isTopPage = pathname === '/';

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <video
        src="/video/main-visual/unknown-ceremony.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
        initial={{ opacity: isTopPage ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={isTopPage ? { duration: 0.5, delay: 1, ease: 'linear' } : { duration: 0 }}
      />
    </div>
  );
};

export default Background;
