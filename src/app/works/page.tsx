import Link from 'next/link';

const WorksPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/works/artworks">ARTWORKS</Link>
        </li>
        <li>
          <Link href="/works/movies">MOVIES</Link>
        </li>
        <li>
          <Link href="/works/bgm">BGM</Link>
        </li>
      </ul>
    </>
  );
};

export default WorksPage;
