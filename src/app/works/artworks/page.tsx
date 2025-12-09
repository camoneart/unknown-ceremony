import Link from 'next/link';
import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.artworks;

const categories = [
  { name: 'Characters', href: '/works/artworks/characters' },
  { name: 'Oil Paintings', href: '/works/artworks/oil-paintings' },
  // ダミーデータ（スクロール確認用）
  { name: 'Category 3', href: '#' },
  { name: 'Category 4', href: '#' },
  { name: 'Category 5', href: '#' },
  { name: 'Category 6', href: '#' },
  { name: 'Category 7', href: '#' },
  { name: 'Category 8', href: '#' },
];

// ダミーデータ
const tags = [
  'Oil painting',
  'Marionette',
  'Sketch',
  'Digital',
  'Sculpture',
  'Photography',
  'Illustration',
  'Concept Art',
  'Watercolor',
  'Acrylic',
  'Charcoal',
  'Ink',
  'Mixed Media',
  '3D Modeling',
  'Animation',
  'Pixel Art',
];

const ArtworksPage = () => {
  return (
    <div className="w-full overflow-hidden h-full grid">
      <div className="w-full mx-auto max-w-[700px] grid grid-rows-[auto_auto] place-content-center gap-[40px] pt-[25px]">
        {/* Left Column: Categories */}
        <section className="">
          <div className="grid gap-[20px]">
            <h2
              className="text-[24px] text-center grid tracking-[0.2em]"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
            >
              CATEGORIES
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[8px] overflow-y-scroll">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-[14px] border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all duration-300 grid place-items-center px-[5px] py-[15px] backdrop-blur-[2px]"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Tags */}
        <section className="">
          <div className="grid gap-[15px]">
            <h2
              className="text-[24px] text-center grid tracking-[0.2em]"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
            >
              TAGS
            </h2>
            <div className="h-[200px]">
              <div className="flex flex-wrap gap-[15px]">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/"
                    className="relative transition-all duration-300 grid place-items-center py-[5px] px-[10px] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[50%] after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.215,0.61,0.355,1)] after:scale-x-0 hover:after:scale-x-100"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtworksPage;
