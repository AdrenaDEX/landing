'use client';
import { useEffect, useState } from 'react';

import Hero from './sections/Hero';
import TwoToken from './sections/TwoToken';
import Community from './sections/Community';

import githubLogo from './assets/github.svg';
import twitterLogo from './assets/twitter.svg';
import sepImg from './assets/line.png';

import Image from 'next/image';
import Link from 'next/link';
import Button from './components/Button';
import { twMerge } from 'tailwind-merge';
import Trading from './sections/Trading';
import Tokens from './sections/Tokens';

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const isLoaded = isHeaderLoaded /*&& isMidLoaded*/ && isBtmLoaded;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // no scroll during loading
  // useEffect(() => {
  //   if (!isLoaded) {
  //     document.documentElement.style.overflowY = 'hidden';
  //   } else {
  //     document.documentElement.style.overflowY = 'auto';
  //   }
  // }, [isLoaded]);

  return (
    <>
      {isLoaded && (
        <div className="border-transparent bg-transparent fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in max-w-[2000px] m-auto">
          <p className="font-specialmonster text-2xl mr-5 tracking-normal">
            Adrena
          </p>

          <Button className="p-2 w-[125px] sm:w-[175px] text-sm" />
        </div>
      )}

      <Hero
        isLoaded={isLoaded}
        setIsHeaderLoaded={setIsHeaderLoaded}
        setProgress={setProgress}
      />

      <Trading />

      {/*
        
        
          <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />
        
        <div className="text-center flex flex-col items-center">
          <h2 className="mb-4">COMMUNITY OWNED</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            100% of revenues generated are distributed to token holders: 90% in
            USDC real yield, 10% in ADX token buy backs.
          </p>
      </div>*/}

      <div className="relative mt-[8em]">
        <Image
          src={sepImg}
          alt="seperator"
          className="absolute seperator seperator__community__top fade-in-3 z-20"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        />
      </div>

      <TwoToken className="mt-[8em] lg:mt-[6em]" isLoaded={isLoaded} />

      <Community
        className="mt-[8em]"
        setIsBtmLoaded={setIsBtmLoaded}
        isLoaded={isLoaded}
      />

      <Tokens />

      {/* <FAQ /> */}

      <div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

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
    </>
  );
}
