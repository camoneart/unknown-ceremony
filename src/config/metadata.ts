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
  works: {
    title: `WORKS – ${siteConfig.name}`,
    description: 'すべての作品をご覧いただけます。',
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
  artworks: {
    title: `ARTWORKS – ${siteConfig.name}`,
    description: 'イラストの作品をご覧いただけます。',
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
  bgm: {
    title: `BGM – ${siteConfig.name}`,
    description: '音楽の作品をご覧いただけます。',
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
  movies: {
    title: `MOVIES – ${siteConfig.name}`,
    description: '映像作品をご覧いただけます。',
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
