'use client';

import GnavLink from './GnavLink';

interface GnavProps {
  className?: string;
  ulClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  centerNode?: React.ReactNode;
}

const Gnav = ({
  className = '',
  ulClassName = '',
  itemClassName = '',
  linkClassName = '',
  centerNode,
}: GnavProps) => {
  return (
    <nav className={className}>
      <ul className={ulClassName}>
        <li className={itemClassName}>
          <GnavLink href="/about" className={linkClassName}>
            ABOUT
          </GnavLink>
        </li>
        {centerNode && <li className={itemClassName}>{centerNode}</li>}
        <li className={itemClassName}>
          <GnavLink href="/works" className={linkClassName}>
            WORKS
          </GnavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Gnav;
