type Props = {
  children: React.ReactNode;
};

export const ArtworkCardContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[30px]">
      {children}
    </div>
  );
};
