'use client';

import { useTheme } from 'next-themes';
import { useEffect, startTransition, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const isDark = theme === 'dark';

  if (!mounted) {
    return (
      <button
        className={styles.toggle}
        aria-label="テーマ切り替え"
        disabled
        aria-hidden="true"
        data-pointer-hide
      >
        <span className={styles.skeleton}>
          <span className={styles.skeletonThumb} />
        </span>
      </button>
    );
  }

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className={styles.toggle}
      aria-label="テーマ切り替え"
      data-pointer-hide
    >
      <span className={`${styles.track} ${isDark ? styles.dark : ''}`}>
        <span className={styles.thumb}>
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}
