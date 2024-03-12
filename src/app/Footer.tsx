import Image from 'next/image';
import Link from 'next/link';

import githubLogo from './assets/github.svg';
import xLogo from './assets/x.svg';
import arrowUpImage from './assets/arrow-up.svg';
import sepImg from './assets/line.png';
import { twMerge } from 'tailwind-merge';

export default function Footer({ className }: { className?: string }) {
  return (
    <>
      <div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

      <footer
        className={twMerge(
          'flex flex-col gap-3 items-center justify-center h-[10em] w-full relative',
          className,
        )}
      >
        <div className="absolute left-8 bottom-4 opacity-70 text-sm">
          2023-{new Date().getFullYear()}
        </div>

        <div className="flex flex-row gap-20 justify-center items-center">
          <Link
            href="https://github.com/orgs/AdrenaDEX/repositories"
            target="_blank"
          >
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={githubLogo}
              alt="github icon"
              width="40"
              height="40"
            />
          </Link>

          <Link href="https://twitter.com/AdrenaProtocol" target="_blank">
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={xLogo}
              alt="x icon"
              width="32"
              height="32"
            />
          </Link>
        </div>

        <Image
          className="hover:opacity-90 opacity-50 cursor-pointer absolute right-2 bottom-4"
          src={arrowUpImage}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          alt="go up icon"
          width="32"
          height="32"
        />
      </footer>
    </>
  );
}
