import Image from 'next/image';
import { notFound } from 'next/navigation';
import { artworks } from '@/config/artworks';

import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artwork = artworks.find((art) => art.id === id);

  if (!artwork) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${artwork.title} – UNKNOWN CEREMONY`,
    description: artwork.description,
  };
}

const OilPaintingDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const oilPainting = artworks.find((art) => art.id === id);

  if (!oilPainting) {
    notFound();
  }

  return (
    <div className="w-full h-full overflow-y-auto grid place-content-center">
      <div className="min-w-[750px] max-w-[750px] grid gap-[20px] pb-[50px]">
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden border border-white/50">
          <Image
            src={oilPainting.imageUrl}
            alt={oilPainting.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Content */}
        <div className="grid gap-[10px]">
          <div className="border-b border-white/50 pb-[10px]">
            <h1 className="text-[20px] px-[5px] text-center">{oilPainting.title}</h1>
          </div>
          <p className="px-[5px] leading-[1.75]">{oilPainting.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OilPaintingDetailPage;
