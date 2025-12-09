import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.bgm;

const BgmPage = () => {
  return (
    <div className="grid h-full place-items-center">
      <p className="text-[20px]" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        Coming soon...
      </p>
    </div>
  );
};

export default BgmPage;
