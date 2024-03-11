import Image from 'next/image';
import Link from 'next/link';

import githubLogo from './assets/github.svg';
import twitterLogo from './assets/twitter.svg';

export default function Footer() {
  return (
    <footer className="flex flex-row gap-3 justify-center p-3 items-center ">
      {/* <p className="font-specialmonster">Adrena</p> */}
      <div className="flex flex-row gap-6 justify-center items-center">
        <Link
          href="https://github.com/orgs/AdrenaDEX/repositories"
          target="_blank"
        >
          <Image
            className="hover:opacity-90 cursor-pointer"
            src={githubLogo}
            alt="github icon"
            width="32"
            height="32"
          />
        </Link>

        <Link href="https://twitter.com/AdrenaProtocol" target="_blank">
          <Image
            className="hover:opacity-90 cursor-pointer"
            src={twitterLogo}
            alt="twitter icon"
            width="32"
            height="32"
          />
        </Link>
      </div>
      {/* <a href="https://alpha.adrena.xyz/">
      <button className="p-1 bg-[#4C34A4] w-[100px] text-sm shadow-xl hover:bg-[#432D87] transition duration-300 rounded-full">
        TRADE NOW
      </button>
    </a> */}
    </footer>
  );
}
