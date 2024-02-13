'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import FAQ from './components/FAQ';
import Hero from './sections/Hero';
import Community from './sections/Community';
import TwoToken from './sections/TwoToken';

import diamondImg from './assets/diamond.png';
import sepImg from './assets/line.png';
import monsterPillarImg from './assets/trade-monster.png';
import githubLogo from './assets/github.svg';
import twitterLogo from './assets/twitter.svg';

import Image from 'next/image';
import Link from 'next/link';
import Button from './components/Button';

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);

  const isLoaded = isHeaderLoaded;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // no scroll during loading
  useEffect(() => {
    if (!isLoaded) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isLoaded]);

  return (
    <>
      {isLoaded && (
        <div className="border-transparent bg-transparent fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in max-w-[2000px] m-auto">
          <p className="font-specialmonster text-2xl mr-5 font-light">Adrena</p>

          <Button className="p-2 w-[125px] sm:w-[175px] text-sm" />
        </div>
      )}

      <Hero isLoaded={isLoaded} setIsHeaderLoaded={setIsHeaderLoaded} />

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
        <div className="text-center">
          <h3 className="text-4xl">INSTANT EXECUTION</h3>
          <p className="max-w-[400px] font-kavivanar">
            Unleash the raw power of Solana with trades that execute in
            miliseconds with NEAR ZERO gas fees. Get the trading experience of a
            CEX with the resillence and reilability of a DEX.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">50X LEVERAGE</h3>
          <p className="max-w-[400px] font-kavivanar">
            Long and short your favorite cryptocurrencies with up to 50x
            leverage while maintaining 100% self custody and control of your
            assets... Not your keys, not your coins!
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">EARN REAL YIELD</h3>
          <p className="max-w-[400px] font-kavivanar">
            Adrena is focused on actual financial inclu-sion. 100% of the
            revenue generated is passed through to token holders, liqudity
            providers, and users of the platform.
          </p>
        </div>
      </div>

      <Community setIsMidLoaded={setIsMidLoaded} isLoaded={isLoaded} />

      <div className="relative">
        <Image
          src={diamondImg}
          alt="seperator"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45"
        />
      </div>

      <TwoToken setIsBtmLoaded={setIsBtmLoaded} isLoaded={isLoaded} />

      <div className="relative flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
        <div className="text-center">
          <h3 className="text-4xl">ADX</h3>
          <p className="max-w-[400px] font-kavivanar">
            Designed to foster community engagement and decentralized
            decision-making, ADX holders have the opportunity to shape the
            direction of the platform through governance proposals and voting
            mechanisms.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">ALP</h3>
          <p className="max-w-[400px] font-kavivanar">
            ALP Token, short for Adrena Liquidity Protocol Token, is the
            cornerstone of a revolutionary ecosystem designed to empower
            individuals in their financial endeavors.
          </p>
        </div>
        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">Rewards</h3>
          <p className="max-w-[400px] font-kavivanar">
            Adrena ecosystem offers a diverse range of opportunities for earning
            rewards and shaping the future of finance.
          </p>
        </div>
      </div>
      <Image
        src={sepImg}
        alt="seperator"
        className="seperator fade-in-3"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <FAQ />

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
              width="20"
              height="20"
            />
          </Link>

          <Link href="https://twitter.com/AdrenaProtocol" target="_blank">
            <Image
              className="hover:opacity-90 cursor-pointer"
              src={twitterLogo}
              alt="twitter icon"
              width="20"
              height="20"
            />
          </Link>
        </div>
        {/* <a href="https://alpha.adrena.xyz/">
          <button className="p-1 bg-[#4C34A4] w-[100px] font-kavivanar text-sm shadow-xl hover:bg-[#432D87] transition duration-300 rounded-full">
            TRADE NOW
          </button>
        </a> */}
      </footer>
    </>
  );
}
