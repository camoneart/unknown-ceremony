import Link from 'next/link';
import Image from 'next/image';
import { Artwork } from '@/config/artworks';

type ArtworkCardProps = {
  artwork: Artwork;
};

export const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  return (
    <article className="group relative bg-white/5 border border-white/30 overflow-hidden hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 grid grid-rows-subgrid row-span-4 gap-[10px]">
      <Link href={`/works/artworks/${artwork.id}`} className="contents">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/30">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Content */}
        <div className="grid gap-[10px] grid-rows-subgrid row-span-3 px-[15px] pb-[15px] pt-[5px]">
          <h2 className="text-lg leading-tight">{artwork.title}</h2>
          <p className="text-xs grid w-full">#{artwork.tag}</p>
          <div className="grid place-self-end pt-[30px]">
            <span className="text-[10px]">{artwork.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
