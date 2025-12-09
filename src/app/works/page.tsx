import Link from 'next/link';
import { worksLinks } from '@/config/works';

import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.works;

const WorksPage = () => {
  return (
    <>
      <div className="h-full grid place-content-center">
        <ul className="w-[500px] grid gap-[25px]">
          {worksLinks.map((link) => (
            <li
              key={link.href}
              className="group relative grid place-self-start transition-transform duration-300 hover:translate-x-2"
            >
              <div
                className="absolute -left-3 top-0 bottom-0 w-px bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <Link
                href={link.href}
                className="text-[20px] px-[5px]"
                style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
              >
                {link.label}
                <p className="text-[12px] opacity-80">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorksPage;
