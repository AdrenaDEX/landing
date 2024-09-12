import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import arrowUpImage from './assets/arrow-up.svg';
import discordLogo from './assets/discord.png';
import discourseLogo from './assets/discourse.svg';
import githubLogo from './assets/github.svg';
import xLogo from './assets/x.svg';

export default function Footer({
  className,
  is4k,
}: {
  className?: string;
  is4k: boolean;
}) {
  return (
    <>
      <footer
        className={twMerge(
          'flex flex-col gap-3 items-center justify-center h-[8em] w-full relative',
          className,
        )}
      >
        <div
          className="absolute left-8 bottom-4 opacity-70 text-sm"
          style={is4k ? { fontSize: '2em' } : {}}
        >
          2023-{new Date().getFullYear()}
        </div>

        <div className="flex flex-row gap-20 justify-center items-center">
          <Link href="https://github.com/orgs/AdrenaFoundation" target="_blank">
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={githubLogo}
              alt="github icon"
              width={is4k ? '70' : '35'}
              height={is4k ? '70' : '35'}
            />
          </Link>

          <Link href="https://twitter.com/AdrenaProtocol" target="_blank">
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={xLogo}
              alt="x icon"
              width={is4k ? '54' : '27'}
              height={is4k ? '54' : '27'}
            />
          </Link>

          <Link href="https://discord.gg/adrena" target="_blank">
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={discordLogo}
              alt="Discord icon"
              width={is4k ? '76' : '38'}
              height={is4k ? '76' : '38'}
            />
          </Link>

          <Link href="https://adrena.discourse.group/" target="_blank">
            <Image
              className="hover:opacity-100 opacity-50 cursor-pointer"
              src={discourseLogo}
              alt="discourse icon"
              width={is4k ? '64' : '32'}
              height={is4k ? '64' : '32'}
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
          width={is4k ? '64' : '32'}
          height={is4k ? '64' : '32'}
        />
      </footer>
    </>
  );
}
