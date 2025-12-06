import { artworks } from '@/config/artworks';
import { ArtworkCard, ArtworkCardContainer } from '@/features/artworks/components';
import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.artworks;

const OilPaintingsPage = () => {
  return (
    <div className="max-w-[1500px] w-full h-full overflow-y-auto mx-auto">
      <div className="pb-[20px] pt-[25px]">
        <h1
          className="text-[20px] tracking-widest text-center"
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
        >
          OIL PAINTINGS
        </h1>
        <ArtworkCardContainer>
          {artworks
            .filter((art) => art.category === 'Oil painting')
            .map((art) => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
        </ArtworkCardContainer>
      </div>
    </div>
  );
};

export default OilPaintingsPage;
