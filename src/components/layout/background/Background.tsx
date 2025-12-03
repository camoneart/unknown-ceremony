import Image from 'next/image';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <Image
        src="/images/cover/unknown-ceremony-cover.jpg"
        alt="Unknown Ceremony Cover"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default Background;
