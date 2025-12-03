const Background = () => {
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
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default Background;
