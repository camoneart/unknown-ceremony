import type { Metadata } from 'next';

export const siteConfig = {
  name: 'UNKNOWN CEREMONY',
  description: 'UNKNOWN CEREMONY - 無名による式典',
};

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: 'UNKNOWN CEREMONY - 無名による式典',
    description: siteConfig.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  },
  about: {
    title: `ABOUT – ${siteConfig.name}`,
    description: 'UNKNOWN CEREMONYについて。',
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  },
};
